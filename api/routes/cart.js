const router = require('express').Router();
const cartItem =require('../models/Cart');
const { verifYTokenAndAdmin, verifYTokenAndAutherization } = require('./verifyToken');


//CREATE

router.post('/new',verifYTokenAndAutherization,async(req,res)=>{
    const cartProduct = new  cartItem(req.body)

    try {
        await cartProduct.save();
        res.status(200).json(cartProduct)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
    
    
});

//UPDATE

router.put('/:id',verifYTokenAndAutherization,async(req,res)=>{
    
        try {
            const updatedCart =await cartItem.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true});
            res.status(200).json(updatedCart)
        } catch (error) {res.status(500).json(error)
            
        }
    
  
});

//DELETE METHOD  

router.delete('/:id',verifYTokenAndAutherization,async (req,res)=>{
    try {
        await cartItem.findByIdAndDelete(req.params.id)
        res.status(200).json("Product deleted")
    } catch (error) {
        res.status(500).json(error)
        
    }

});

//GET USERCART

router.get('/find/:userId',verifYTokenAndAutherization,async (req,res)=>{
    try {
     const cart = await cartItem.findOne({userId:req.params.userId})

        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json(error)
        
    }

});

//GET ALL 

router.get('/',verifYTokenAndAdmin,async (req,res)=>{
   
try {
    const cart =await cartItem.find()
    res.status(200).json(cart)
} catch (error) {
    res.status(500).json(error)
    
}
});




module.exports = router;