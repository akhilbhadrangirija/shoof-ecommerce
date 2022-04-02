const jwt =require('jsonwebtoken')

const verifyToken =(req,res,next)=>{
    const authHeader =req.headers.token;
    if(authHeader){
        // const token = authHeader.split(" ")[1] if you use bearer in headers for token
        jwt.verify(authHeader,process.env.JWT_KEY,(err,user)=>{
            if(err){
                res.status(404).json("Invalid token")
            }
            req.user=user;

            next();
        })
    }else{
        res.status(401).json("No token for Authentication")

    }
   
};
const verifYTokenAndAutherization =(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id ^ req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You are not allowed to edit admin ")
        }
    })
};
const verifYTokenAndAdmin =(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            
            next();
        }else{
            res.status(403).json("You are not allowed ")
        }
    })
};




module.exports={verifyToken,verifYTokenAndAutherization,verifYTokenAndAdmin};