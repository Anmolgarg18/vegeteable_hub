const mongoose = require('mongoose')

const MydatabaseSchema =  new mongoose.Schema({
    email : String,
    phone : Number,
    password : String
})

const MydatabaseModel = mongoose.model("user",MydatabaseSchema)//
module.exports = MydatabaseModel