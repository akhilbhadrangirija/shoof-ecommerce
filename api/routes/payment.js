const router = require('express').Router();
// const Razorpay = require('razorpay');

// var instance = new Razorpay({
//   key_id: process.env.RAZOR_KEY,
//   key_secret: process.env.RAZOR_SECRET,
// });

// instance.orders.create({
//   amount: 50000,
//   currency: "INR",
//   receipt: "receipt#1",
//   notes: {
//     key1: "value3",
//     key2: "value2"
//   }
// })

router.get('/',(req,res)=>{
  res.send('under construction')
  console.log("under development");
})


module.exports = router;