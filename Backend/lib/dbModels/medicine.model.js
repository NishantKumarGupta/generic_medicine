const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
    genericName: {
        type: String,
        required: [true, "No generic name specified"]
    },
    saltName: {
        type: String,
        required: [true, "No salt name specified"]
    },
    effect: {
        type: String,
        required: [true, "No effect specified"]
    },
    sideEffect: {
        type: String,
        required: [true, "No side effects specified"]
    }
});

module.exports.MedicineSchema = mongoose.model("medicine", medicineSchema);