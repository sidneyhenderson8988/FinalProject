const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    userType:{
        type: String,
        default: "normal"
    },
    budget:[
        {
            title: {
                type: String,
                required: true,
            },
            budget: {
                type: Number,
                required: true,
            },
            color: {
                type: String,
                required: true,
                minlength: 7, 
                maxlength: 7,
            },
        }
    ]
});
module.exports=mongoose.model("userCollection", userSchema);