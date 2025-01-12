const express = require('express');
const app = express()
const port = 5000;
const cors = require("cors")
const mongoose = require("mongoose")
const mongourl = require("./keys")

<<<<<<< HEAD

=======
>>>>>>> a0d988da955c9adc217c5f05a4f650aff055f68f
app.use(cors())
app.use(express.json())
    
require('./models/model')
app.use(require("./routes/auth"))
mongoose.connect(mongourl);

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