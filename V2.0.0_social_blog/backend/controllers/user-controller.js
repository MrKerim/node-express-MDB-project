import User from "../model/User.js";
import bcrypt from "bcryptjs";
 
export const getAllUsers = async (req, res, next) => {
    let users;
    try{
        users = await User.find();
    }
    catch(err){
        console.log(err);   
    }
    if(!users){
        return res.status(404).json({message: "No users found"}); 
    }
    res.status(200).json({users});
};

export const signup = async (req,res,next) => {
    const {name,email,password} = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({email});
    }
    catch(err){
        return console.log(err);
    }

    if(existingUser){
        return res.status(400).json({message: "User already exists! Login instead"});
    }

    const hashedPassword = await bcrypt.hashSync(password);
    const newUser = new User({
        name,
        email,
        password: hashedPassword,
        blogs : []
    });


    try{
        await  newUser.save();
    }
    catch(err){
        return console.log(err);
    }
    res.status(201).json({newUser});
};

export const login = async (req,res,next) => {
    const {email,password} = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({email});
    }
    catch(err){
        return console.log(err);
    }

    if(!existingUser){
        return res.status(404).json({message: "User doesn't exist! Signup instead"});
    }
     
    const isValidPassword = bcrypt.compareSync(password, existingUser.password);
    if(!isValidPassword){
        return res.status(400).json({message: "Invalid password"});
    }
    return res.status(200).json({message: `Logged in as ${existingUser.name}!`});

};

// This doesn't deletes the blogs of the user
// And also after the deletion the blogs can only be accessed by the id number of the blog
// And can't be accessed by getById in the blog-controller.js
export const deleteUser = async (req,res,next) => {
    const userId = req.params.id;
    let user;
    try{
        user = await User.findByIdAndDelete(userId);
    }
    catch(err){
        return console.log(err);
    }
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    res.status(200).json({message:"User deleted"});
};