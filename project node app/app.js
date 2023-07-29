require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

// const  flash =require('express-flash-message');


const session = require('express-session');
const flash = require('express-flash');
const connectDB = require('./server/config/db.js')


const app = express();
const port = process.env.PORT || 5000;

//connect to database
connectDB();


//passing data
app.use(express.urlencoded({ extended:true}));
app.use(express.json());

//static files
app.use(express.static('public'));

// express session
app.use(
    session({
        secret:'secret',
        resave:false,
        saveUninitialized:true,
        cookie:{
            maxAge:1000*60*60*24*7, //1 week
        }
    })
)

//flash messages
app.use(flash({sessionKeyName:'flashMessage'}));

//template engine 
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');

//routes
app.use('/',require('./server/routes/customer'))

//Handle 404
app.get('*',(req,res)=>{
    res.status(404).render('404')
})
app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
});

//1:27