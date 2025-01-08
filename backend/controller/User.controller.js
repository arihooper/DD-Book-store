import User from "../model/User.model.js";
import bcryptjs from "bcryptjs"
export const signup = async (req,res)=>{
    try {
        const{fullname,email,password}=req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User Already Exists"})
        }
        const hashPassword = await bcryptjs.hash(password, 10); //the bcryptjs used to securely hash passwords using the bcrypt algorithm.
        const createdUser=new User({
            fullname:fullname,
            email:email,
            password: hashPassword,
        });
        await createdUser.save()
        res.status(201).json({message: "User Accont Created Scuccessfully", user:{
            _id: createdUser._id,
            fullname: createdUser.fullname,
            email: createdUser.email,
        },});
    } catch (error) {
        console.log("Error: " + error.message)
        res.status(500).json({message: "Internal server error"});
        
    }
};
export const login = async(req, res) => {
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const isMatch= await bcryptjs.compare(password, user.password) // check if the password is correct by using await
        if(!user || !isMatch){
            return res.status(400).json({message: "Invalid Username or Password"});
        }else{
            res.status(200).json({message: "Login Successfully",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email,
            },});
        }
    } catch (error) {
        console.log("Error: " + error.message)
        res.status(500).json({message: "Internal Server error"});
    }
};