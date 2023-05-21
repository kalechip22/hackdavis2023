const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://hackdavis:moomoo@mimo.pzmvxek.mongodb.net/journalDB", {useNewUrlParser: true}, {useUnifiedTopology: true})

// Create data schema
const journalSchema = {
   title: String,
   date: Date,
   content: String 
}

const Journal = mongoose.model("Journal", journalSchema);

// Start get request with starting page
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/newentry.html")
  
})

// To post journal entries to database
app.post("/post-journal", function(req, res) {
    let newJournal = new Journal({
        title: req.body.topic,
        date: req.body.written,
        content: req.body.content
    });
    newJournal.save();
    res.redirect("/public/portal.html");
})

app.listen(3000, function() {
    console.log("server is running on 3000")
})
