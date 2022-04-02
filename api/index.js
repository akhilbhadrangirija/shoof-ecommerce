const express = require('express');
const mongoose =require('mongoose');
const dotenv =require('dotenv');
const userRoute =require('./routes/user')
const authRoute =require('./routes/auth')
const productRoute =require('./routes/product')
const cartRoute =require('./routes/product')
const orderRoute =require('./routes/order')
const paymentRoute =require('./routes/payment')



const app =express();

dotenv.config();

app.use(express.json());

app.use('/api/user',userRoute);
app.use('/api/auth',authRoute);
app.use('/api/product',productRoute);
app.use('/api/cart',cartRoute);
app.use('/api/order',orderRoute);
app.use('/api/payment',paymentRoute);


///Database

mongoose.connect(`mongodb+srv://akhil:${process.env.DBKEY}@ecommerce.1mekl.mongodb.net/shop?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
        useUnifiedTopology: true
})
.then(()=>console.log("Connected to database"))
.catch((err)=>console.log(err));




///server

app.listen(process.env.PORT || 5000,()=>console.log("Server started"))

