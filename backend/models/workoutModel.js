// a schema defines the structure of the data within a particular collection. 
//This includes the fields present in documents, the type of data each field can contain, and other constraints or default values
//model: bridge between the database and the application's logic, encapsulating the data's structure, behavior, and business logic
const mongoose  = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true 
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('workout', workoutSchema)

