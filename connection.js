const mongoose = require("mongoose");

let mongoDB = `mongodb+srv://javiergongora:esterno3cleido7@cluster0.mzhxg.mongodb.net/plants-and-animals?retryWrites=true&w=majority`;

module.exports = mongoose.connect(mongoDB);
