const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/";
const dbName = "Chat-Application";

const connectToDB = async (errCB) => {
    try {
        await mongoose.connect(connectionString, {
            dbName: dbName
        });
        return "Connected to Mongodb Sucessfully";
    } catch (err) {
        errCB();
    }
};

module.exports = connectToDB;