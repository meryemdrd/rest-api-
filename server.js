const express=require("express");
const app=express();
const connectDB = require('./config/connectDB')
const User = require('./models/User')

//connect db  
connectDB()

//Routes 

//Add new User


app.post("/", (req,res)=>{
    const newUser = new User({...req.body});
    newUser
      .save()
      .then((User)=> res.send(User))
      .catch((err)=> res.send(err));
})

//Get all Users


app.post("/", (req,res)=>{
  User.find()
        .then((Users) => res.send(Users))
        .catch((err)=> res.send(err));
      })


//Edit  a User by ID


app.put("/:_id", (req,res)=>{
    let {_id} = req.params;
    User.findByIdAndUpdate({_id},{$set: {...req.body}})
          .then(() => res.send("this User has been updated successfully"))
          .catch((err)=> res.send(err));
  });
  
//4- parse data
app.use(express.json())

//  REMOVE A USER BY ID 


app.delete("/:_id", (req,res)=>{
  let {_id} = req.params;
  User.findByIdAndDelete({_id})
        .then(() => res.send("this User has been deleted successfully"))
        .catch((err)=> res.send(err));
});


//4- parse data
app.use(express.json())


//run the server 
const port=process.env.PORT|7000; 
app.listen(port, (err)=> {
    err?console.log('err :',err) : console.log(`The server is running on port ${port}`);
})

