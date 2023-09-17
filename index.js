const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const MydatabaseModel = require('./models/Mydatabase')
const MyorderModel=require('./models/Orderdatabase')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://anmolgargag18:anmol@cluster0.93cq9tg.mongodb.net/?retryWrites=true");

//login
app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    MydatabaseModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("the password is incorrct")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.post("/saveorder",(req,res)=>{
    MyorderModel.create(req.body)
    .then(user => res.json(user))//
    .catch(err => res.json(err))
})



app.post('/register',(req , res)=>{
    MydatabaseModel.create(req.body)
    .then(user => res.json(user))//
    .catch(err => res.json(err))
})

app.get('/orders',async(req,res)=>{
    const data=await MyorderModel.find();
    console.log(data)
    res.send(data)
})

app.listen(3001 , () =>{
console.log("Server is running")
})