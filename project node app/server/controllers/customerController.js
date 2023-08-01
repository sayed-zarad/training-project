const Customer = require('../models/customer');
const mongoose = require('mongoose');

// GET /
//homepage


exports.homepage =async(req,res)=>{
    const message =req.flash('info');
        const locals = {
            title:'nodeJS',
            desc:'free nodejs user management'
        }

        let perPage =12;
        let page= req.query.page||1

        try {
            const customers = await Customer.aggregate([{$sort:{updatedAt:-1}}]).skip(perPage*page-perPage).limit(perPage).exec()
        
            const count = await Customer.count();
            res.render('index', {locals,customers,current:page,pages:Math.ceil(count/perPage),message})

        } catch (error) {
            console.log(error)
        }
    
}









// exports.homepage =async(req,res)=>{
//     const message =req.flash('info');
//         const locals = {
//             title:'nodeJS',
//             desc:'free nodejs user management'
//         }
//         try {
//             const customers = await Customer.find({}).limit(22)
//         res.render('index', {locals,message,customers})

//         } catch (error) {
//             console.log(error)
//         }
    
// }


// GET /
//new customer form

exports.addCustomer =async(req,res)=>{
    const locals = {
        title:'Add New Customer',
        desc:'free nodejs user management'
    }
    res.render('customer/add', locals)

}

// post /
//create customer form

exports.postCustomer =async(req,res)=>{
    console.log(req.body)
    const newCustomer = new Customer({
        firstName:req.body['firstName'],
        lastName:req.body['lastName'],
        details:req.body['details'],
        tel:req.body['tel'],
        email:req.body['email']
    })
    const locals = {
        title:'New Customer Added',
        desc:'free nodejs user management'
    }
    try {
        await Customer.create(newCustomer)
        await req.flash('info','new customer added successfully');
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }

}

// GET /
//view data
exports.view = async (req, res) => {

    try {
      const customer = await Customer.findOne({ _id: req.params.id })
  
      const locals = {
        title: "View Customer Data",
        description: "Free NodeJs User Management System",
      };
  
      res.render('customer/view', {
        locals,
        customer
      })
  
    } catch (error) {
      console.log(error);
    }
  
  }
  


  // GET /
//edit data
  exports.edit = async (req, res) => {

    try {
      const customer = await Customer.findOne({ _id: req.params.id })
  
      const locals = {
        title: "Edit Customer Data",
        description: "Free NodeJs User Management System",
      };
  
      res.render('customer/edit', {
        locals,
        customer
      })
  
    } catch (error) {
      console.log(error);
    }
  
  }