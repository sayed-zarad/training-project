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
        try {
            const customers = await Customer.find({}).limit(22)
        res.render('index', {locals,message,customers})

        } catch (error) {
            console.log(error)
        }
    
}


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