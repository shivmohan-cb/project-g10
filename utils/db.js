const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/";
const dbName = "Chat-Application";
mongoose.connect(connectionString,{
dbName: dbName
});