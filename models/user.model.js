const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { CreateError } = require("../utils/errorHandler");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    profiePic: { type: String, default: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});


userSchema.pre("save", async function (next) {
    //encrypt password
    if (this.isNew) {// checking if user is newly created
        console.log("isnew condition");
        const salt = await bcrypt.genSalt(5);
         const hash =  await bcrypt.hash(this.password, salt)
         this.password = hash;
         next();
    } else {
        next();
    }
});


const User = mongoose.model("user", userSchema);

module.exports = User;