const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const USER = mongoose.model("USER");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Jwt_secret } = require("../keys");

router.get('/', (req, res) => {
    res.send("hello")
});


// Signup Route
router.post("/signup", async (req, res) => {
    const { name, userName, email, password } = req.body;

    // Check if all fields are provided
    if (!name || !email || !userName || !password) {
        return res.status(422).json({ error: "Please add all the fields" });
    }

    try {
        // Check if the user already exists with the same email or username
        const savedUser = await USER.findOne({ $or: [{ email: email }, { userName: userName }] });

        if (savedUser) {
            return res.status(422).json({ error: "User already exists with that email or userName" });
        }

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 12);
        console.log('Hashed Password: ', hashedPassword);  // Log the hashed password to check if it's correct

        // Create a new user
        const user = new USER({
            name,
            email,
            userName,
            password: hashedPassword
        });

        // Save the new user to the database
        await user.save();
        res.json({ message: "Registered successfully" });

    } catch (err) {
        console.error("Error in signup:", err);
        res.status(500).json({ error: "Something went wrong during signup" });
    }
});


// Signin Route
router.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    // Check if both email and password are provided
    if (!email || !password) {
        return res.status(422).json({ error: "Please add email and password" });
    }

    try {
        // Find the user by email
        const savedUser = await USER.findOne({ email: email });

        if (!savedUser) {
            return res.status(422).json({ error: "Invalid email" });
        }

        console.log('User found:', savedUser); // Log user details (excluding password)

        // Compare the entered password with the stored hashed password
        const match = await bcrypt.compare(password, savedUser.password);

        if (match) {
            // Generate JWT token if the password matches
            const token = jwt.sign({ _id: savedUser._id }, Jwt_secret);
            const { _id, name, email, userName } = savedUser;

            // Respond with token and user data
            res.json({
                token,
                user: { _id, name, email, userName }
            });

            console.log('Signed in successfully:', { token, user: { _id, name, email, userName } });
        } else {
            return res.status(422).json({ error: "Invalid password" });
        }

    } catch (err) {
        console.error("Error in signin:", err);
        res.status(500).json({ error: "Something went wrong during signin" });
    }
});

module.exports = router;
