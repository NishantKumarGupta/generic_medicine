const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
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

module.exports.DoctorSchema = mongoose.model("doctor", doctorSchema);