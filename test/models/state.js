const mongoose = require('mongoose')

const StateSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    country_shortName:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('State',StateSchema)