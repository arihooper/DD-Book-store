import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        requried:true,
    },
    email:{
        type:String,
        requried:true,
        unique:true,
    },
    password:{
        type:String,
        requried:true,
    },
    
})
const User=mongoose.model("User",userSchema);

export default User;