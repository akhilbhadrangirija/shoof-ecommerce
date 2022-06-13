const router = require('express').Router();
const Users =require('../models/User')
const jwt =require('jsonwebtoken')

var CryptoJS = require("crypto-js");

// Encrypt


//REGISTER

router.post('/register',async(req,res)=>{

  
    const newUser = new Users ({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.SECRETKEY).toString()
    })
    try {
        const savedUser=await newUser.save();
        // res.status(200).json(savedUser);
        console.log(savedUser)

        //acess token for registered user
         ///   ///
        const acessToken =jwt.sign({id:savedUser._id,isAdmin:savedUser.isAdmin},process.env.JWT_KEY,{expiresIn:"3d"})

        const {password,...others}=savedUser;
 
        res.status(200).json({...others,acessToken})
        ////   ///

    } catch (error) {
        res.status(500).json(error)
        
    }
   
})

///LOGIN

router.post('/login',async(req,res)=>{
    try {
        const user = await  Users.findOne({username:req.body.username})
        !user && res.status(401).json("Wrong credentials")
        var bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRETKEY);
        var orgpassword = bytes.toString(CryptoJS.enc.Utf8);

        orgpassword!==req.body.password && res.status(401).json("Wrong password");

        const acessToken =jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_KEY,{expiresIn:"3d"})


        const {password,...others}=user._doc;
 
        res.status(200).json({...others,acessToken})
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;