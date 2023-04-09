const mongoose = require("mongoose");
const db = mongoose.connection;

mongoose.connect("mongodb+srv://shivkumar:I81Q7TvA9ObKHdC3@cluster0.ub8d9.mongodb.net/int", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Connected to MongoDB");
});
module.exports = db;