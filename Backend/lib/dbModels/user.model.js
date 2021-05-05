const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        firstName: {
            type: String,
            required: [true, "No name specified"]
        },
        middleName:{
            type: String
        },
        lastName: {
            type: String,
            required: [true, "No name specified"]
        }
    },
    emailId: {
        type: String,
        required: [true, "No email specified"]
    },
    mobileNo: {
        type: String,
        required: [true, "No mobile No. specified"]
    }
});

module.exports.UserSchema = mongoose.model("user", userSchema);