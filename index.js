const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

// To get database info from MongoDBs
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://hackdavis:moomoo@mimo.pzmvxek.mongodb.net/journalDB";

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(url, {useNewUrlParser: true}, {useUnifiedTopology: true})

// Create data schema
const journalSchema = {
   title: String,
   date: Date,
   content: String 
}

const Journal = mongoose.model("Journal", journalSchema);

app.get("/portal", function(req, res) {
    res.sendFile(__dirname + "/public/portal.html")
  
})

// Start get request with starting page
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/home.html")
})

app.get("/all-entries", function(req, res) {
    Journal.find().sort({date : -1}).then((result)=>{
        // console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
    }).catch((err)=>{
        res.send(err);
        // console.log(err);
    })
    console.log("ran") 
})

// To post journal entries to database
app.post("/post-journal", function(req, res) {
    let newJournal = new Journal({
        title: req.body.topic,
        date: req.body.written,
        content: req.body.content
    });
    newJournal.save();
    res.redirect("/portal");
})

app.listen(3000, function() {
    console.log("server is running on 3000")
})
