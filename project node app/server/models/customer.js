const mongoose = require('mongoose');

const schema = mongoose.Schema;
const customerSchema = new schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    tel:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()

    },
})

module.exports=mongoose.model('Customer',customerSchema)