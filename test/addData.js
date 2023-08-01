const connectDB = require('./dpConn')
const Students = require('./models/city')

const jsonDepartment = require('./data.json')

const start = async () => {
    try {
        await connectDB()
        console.log("Connected to the DB")
        // await Students.deleteMany()
        await Students.create(jsonDepartment)
        // console.log("Data added successfully")
        // const student = await Students.findById("64c427fe3ccbcee8a28fb900")
        // student.courses[0].maxGpa.push("B")
        // const result = await student.save()
        // console.log(student)
        console.log("Data added successfully")
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}
module.exports =start
