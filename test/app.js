require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 5000;

const connectDB = require('./dpConn.js')

const addData=require('./addData.js')

const session = require('express-session');
const flash = require('express-flash');
const methodOverride=require('method-override');

//passing data
app.use(express.urlencoded({ extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));

const dependancyRoutes = require('./routes/dependancyRoutes')

app.use('/api',dependancyRoutes)

//static files
app.use(express.static('public'));

mongoose.set('strictQuery',false);



connectDB();
addData()


app.listen(port,()=>{
  console.log(`app listening on port ${port}`)
});
