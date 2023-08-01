const express = require('express');
const dependency_Route = express()

const bodyParser = require('body-parser')

dependency_Route.use(bodyParser.json())
dependency_Route.use(bodyParser.urlencoded({extended: true}))

const dependency_controller=require('../controllers/controller')

dependency_Route.get('/get-countries',dependency_controller.getCountry)
dependency_Route.get('/get-states',dependency_controller.getStates)
dependency_Route.get('/get-cites',dependency_controller.getCites)


module.exports=dependency_Route