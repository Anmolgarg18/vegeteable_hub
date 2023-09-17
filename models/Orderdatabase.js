const mongoose = require('mongoose')

const ordersSchema=new mongoose.Schema({
    name:String,
    quantity:Number,
    price:Number,
    email:String   
})

const MyorderModel = mongoose.model("order",ordersSchema)//
module.exports = MyorderModel