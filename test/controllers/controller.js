const country=require('../models/country');
const city=require('../models/city');
const state=require('../models/state');

const getCountry= async(req,res)=>{
    try{
      const countries =await country.find({ })
      res.status(200).send({success:true,msg:'countries data',data:countries})


    }catch(err){
        res.status(404).render('404')
    }
}

const getStates = async(req,res)=>{
    if(req.body.country_code == undefined || req.body.country_code==""){
        res.status(200).send({success:false,msg:'data not found',data:[]})
    }
    else{

        try{
            const states =await state.find({ country_shortName:req.body.country_code })
            res.status(200).send({success:true,msg:'states data',data:states})
      
      
          }catch(err){
              res.status(404).render('404')
          }
    }
}

const getCites=async (req,res)=>{
    try{
        const cites =await city.find({ state_name:req.body.state_name  })
        res.status(200).send({success:true,msg:'cites data',data:cites})
  
  
      }catch(err){
          res.status(404).render('404')
      }
}

module.exports={
    getCountry,getStates,getCites
}