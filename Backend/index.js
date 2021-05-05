const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const { MedicineSchema } = require("./lib/dbModels/medicine.model.js");
const { DoctorSchema } = require("./lib/dbModels/doctor.model.js");
const { UserSchema } = require("./lib/dbModels/user.model.js");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", (req, res) => {
    res.sendFile();
})

app.post("/medicine", (req, res) => {
    const medicine = new MedicineSchema({
        genericName: req.body.genericName,
        saltName: req.body.saltName,
        effect: req.body.effect,
        sideEffect: req.body.sideEffect
    });
    medicine.save();
    res.send(medicine);
})

app.post("/doctor", (req, res) => {
    const doctor = new DoctorSchema({
        name: {
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName
        },
        emailId: req.body.emailId,
        mobileNo: req.body.mobileNo
    });
    doctor.save();
    res.send(doctor);
})

app.post("/user", (req, res) => {
    const user = new UserSchema({
        name: {
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName
        },
        emailId: req.body.emailId,
        mobileNo: req.body.mobileNo
    });
    user.save();
    res.send(user);
})


app.listen(process.env.PORT || 3000, function () {
    console.log("App listening at port 3000");
})