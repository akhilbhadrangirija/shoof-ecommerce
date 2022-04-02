const router = require('express').Router();
const {verifyToken,verifYTokenAndAutherization, verifYTokenAndAdmin} =require('./verifyToken')
const Users =require('../models/User');
// const query = require('express/lib/middleware/query');


//Update method for user
router.put('/:id',verifYTokenAndAutherization,async(req,res)=>{
    if(req.body.password){
      req.body.password=CryptoJS.AES.encrypt(req.body.password, process.env.SECRETKEY).toString()
    }else{
        try {
            const updatedUser =await Users.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true});
            res.status(200).json(updatedUser)
        } catch (error) {res.status(500).json(error)
            
        }
    }
  
});

//Delete method  

router.delete('/:id',verifYTokenAndAutherization,async (req,res)=>{
    try {
        await Users.findByIdAndDelete(req.params.id)
        res.status(200).json("user deleted")
    } catch (error) {
        res.status(500).json(error)
        
    }

});

//GET usera
router.get('/find/:id',verifYTokenAndAdmin,async (req,res)=>{
    try {
     const user = await Users.findById(req.params.id)

     const {password,...others}=user._doc;
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
        
    }

});
//GET all usermethod
router.get('/',verifYTokenAndAdmin,async (req,res)=>{
    const query =  req.query.new;

    try {
     const users =query ? await Users.find().sort({_id:-1}).limit(5) : await Users.find();

        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
        
    }

});
//GET userstats
router.get('/stats',verifYTokenAndAdmin,async (req,res)=>{
    const date=new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear()-1));
    try {
        const data =await Users.aggregate([
            {$match: {createdAt :{$gte:lastYear}}},
            {
                $project:{
                    month:{$month:"$createdAt"}
                },
            } ,
            {
                $group:{
                    _id:"$month",
                    total:{$sum:1}
                }
            }
        ]);
        res.status(200).json(data)
        
    } catch (error) {
        
    }
});



module.exports = router
