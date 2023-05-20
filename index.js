const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://hackdavis:moomoo@mimo.pzmvxek.mongodb.net/journalDB")

// Create data schema
const journalSchema = {
   title: String,
   content: String 
}

const Journal = mongoose.model("Journal", journalSchema);

app.get("/", function(req, res) {
    res.send("express is working")
})
// app.post

app.listen(3000, function() {
    console.log("server is running on 3000")
})
