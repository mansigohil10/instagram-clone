const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const USER = mongoose.model("USER");
const bcrypt = require("bcrypt")

<<<<<<< HEAD

=======
>>>>>>> a0d988da955c9adc217c5f05a4f650aff055f68f
router.get('/', (req, res) => {
    res.send("hello")
})


router.post("/signup", (req, res) => {
    const { name, userName, email, password } = req.body;
    if (!name || !email || !userName || !password) {
        return res.status(422).json({ error: "Please add all the fields" })
    }
    USER.findOne({ $or: [{ email: email }, { userName: userName }] }).then((savedUser) => {
        if (savedUser) {
            return res.status(422).json({ error: "User already exist with that email or userName" })
        }
        bcrypt.hash(password, 12).then((hashedPassword) => {

            const user = new USER({
                name,
                email,
                userName,
                password: hashedPassword
            })

            user.save()
                .then(user => { res.json({ message: "Registered successfully" }) })
                .catch(err => { console.log(err) })
        })
    })
})

<<<<<<< HEAD
router.post("/signin", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: "Please add email and password" })
    }
    USER.findOne({ email: email }).then((savedUser) => {
        if (!savedUser) {
            return res.status(422).json({ error: "Invalid email" })
        }
        bcrypt.compare(password, savedUser.password).then((match) => {
            if (match) {
                return res.status(200).json({ message: "Signed in Successfully" })
                // const token = jwt.sign({ _id: savedUser.id }, Jwt_secret)
                // const { _id, name, email, userName } = savedUser

                // res.json({ token, user: { _id, name, email, userName } })

                // console.log({ token, user: { _id, name, email, userName } })
            } else {
                return res.status(422).json({ error: "Invalid password" })
            }
        })
            .catch(err => console.log(err))
    })
})

=======
>>>>>>> a0d988da955c9adc217c5f05a4f650aff055f68f




module.exports = router;