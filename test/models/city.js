const mongoose = require('mongoose')

const StateSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    state_name:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('city',StateSchema)