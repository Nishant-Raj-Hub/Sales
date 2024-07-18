import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    employeeid: {
        type: Number,
        unique: true
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }


});

export default mongoose.model("users", userSchema);