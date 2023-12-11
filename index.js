const http=require('http')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

const login = require("./models/login.js")


mongoose.connect('mongodb://127.0.0.1:27017/loginDetails').then(() => console.log("Connected to Database")).catch(console.error);
const port=3000


app.post("/read", async(req,res) => {
    try {

        console.log(req.body.signupData)
       

        const details = new login({
            Username : req.body.signupData.username,
            Email : req.body.signupData.email,
            Password : req.body.signupData.password
          
        });details.save();
        res.json(details)
      }
      catch(err) {
        res.json("error")
      }
    // res.send(date.dateToday())

})

app.get("/getUserByEmail/:id", async(req,res)=>{
const email = req.params.id
console.log(email)
try {
    const user = await login.find({Email : email});
    console.log(user)
    if(user == ''){
      res.json({ message: 'User not found' });
    }
       else {
     
      res.status(200).json({success:true,message:"User found!",data:user});
    }
  } catch (err) {
    res.status(404).json({success:false,message:"No user found!"});
    
  }
})



// async(req,res)=>{
//   const id=req.params.id;
//   try{
//       const user=await User.find(id)
//       res.status(200).json({success:true,message:"User found!",data:user});
//   }
//   catch(err)
//   {
//       res.status(404).json({success:false,message:"No user found!"});
//   }
// }


app.listen(port, () => console.log("Server Started!"))