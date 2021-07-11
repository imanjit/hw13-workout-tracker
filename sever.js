const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3010

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json);
app.use(express.static("public"));

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI,{  
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.listen(PORT, () => {
    console.log("App listening on Port: " + PORT);
});