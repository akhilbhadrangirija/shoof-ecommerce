const router = require('express').Router();

const Order =require('../models/Order');
const { verifYTokenAndAutherization, verifYTokenAndAdmin } = require('./verifyToken');

//CREATE

router.post('/new',verifYTokenAndAutherization,async(req,res)=>{
    const newOrder = new  Order(req.body)

    try {
        await newOrder.save();
        res.status(200).json(newOrder)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
    
    
});

//UPDATE

router.put('/:id',verifYTokenAndAdmin,async(req,res)=>{
    
        try {
            const updatedOrder =await Order.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true});
            res.status(200).json(updatedOrder)
        } catch (error) {res.status(500).json(error)
            
        }
    
  
});

//DELETE METHOD  

router.delete('/:id',verifYTokenAndAdmin,async (req,res)=>{
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Product deleted")
    } catch (error) {
        res.status(500).json(error)
        
    }

});

//GET USERSORDER

router.get('/find/:userId',verifYTokenAndAutherization,async (req,res)=>{
    try {
     const orders = await Order.find({userId:req.params.userId})

        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json(error)
        
    }

});

//GET ALL 

router.get('/',verifYTokenAndAdmin,async (req,res)=>{
   
try {
    const orders =await Order.find()
    res.status(200).json(orders)
} catch (error) {
    res.status(500).json(error)
    
}
}); 

// GET MONTHLY INCOME


router.get('/income',verifYTokenAndAdmin,async (req,res)=>{
    const date=new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1));
    try {

        const salesdata = await Order.aggregate([
            { $match: {createdAt : {gte: previousMonth}}},
            {
                $project:{
                    month:{$month:"$createdAt"},
                    sales:"$amount"

                },
                
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum: "$sales"}
                }
            }

        ]);
        res.status(200).json(salesdata)
        
            
    } catch (error) {
        res.status(500).json(error)
        
    }
});



module.exports = router;