const express = require('express');
const app = express()
const port = 5000;
const cors = require("cors")
const mongoose = require("mongoose")
const { mongoUrl } = require("./keys");


app.use(cors())
app.use(express.json())
    
require('./models/model')
require('./models/post')
app.use(require("./routes/auth"))
app.use(require("./routes/createPost"))
mongoose.connect(mongoUrl);

app.get('/',(req,res) => {
    res.json("hello");
    
})



mongoose.connection.on("connected", () => {
    console.log("successfully connected to mongo")
})

mongoose.connection.on("error", () => {
    console.log("not connected to mongodb")
})

app.listen(port, () => {
    console.log("server is running on port" + " " + port)

})