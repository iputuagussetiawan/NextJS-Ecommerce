import nc from "next-connect";
import bcrypt from "bcrypt";
import User from "../../../models/User";
import db from "../../../utils/db"
import { validateEmail } from "../../../utils/validation";
import { createActivationToken } from "../../../utils/token";
import { sendEmail } from "../../../utils/sendEmails";
const handler = nc();

handler.post(async(req,res)=>{
    try {
        await db.connectDb();
        const {name, email, password}=req.body
        if(!name || !email||!password){
            return res.status(400).json({message:"Please Fill in all field"});
        }

        if(!validateEmail(email)){
            return res.status(400).json({message:"Invalid Email"});
        }

        const user= await User.findOne({email:email})

        if(user){
            return res.status(400).json({message:"This Email already exsist "});
        }
        if(password.length<6){
            return res.status(400).json({message:"Password must be atleast 6 characters"});
        }

        const cryptedPassword=await bcrypt.hash(password,12)
        const newUser=new User({name,email,password:cryptedPassword})
        const addedUser = await newUser.save();
        const activation_token=createActivationToken({
            id:addedUser._id.toString(),
        })
        console.log(activation_token)
        const url=`${process.env.BASE_URL}/activate/${activation_token}`;
       sendEmail(email,url,"","Activate your account")

    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

export default handler;