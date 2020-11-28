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
        default: function(){
            if(this.userType === "admin" || this.userType === "Admin"){
                return "admin"
            }
            else {
                return "normal"
            }
        }
    },
});
module.exports=mongoose.model("userCollection", userSchema);