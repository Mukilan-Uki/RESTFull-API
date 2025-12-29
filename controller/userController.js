import user from "../model/userModel.js";

export const create = async(req,res)=>{
    try{
        const userData = new user(req.body);
        const {email} = userData;

        const userExist = await user.findOne({email});
        if (userExist){
            return res.status(400).json({message:"User already exist"});
        }
        const savedUser = await userData.save();
        res.status(200).json(savedUser);
    }catch(error){
        res.status(500).json({error:"Internal Server Error"})
    }
}

export const fetch = async(req,res)=>{
    try{
        return res.json("Hello World");
    }catch(error){
        res.status(500).json({error:"Internal Server Error"})
    }
}