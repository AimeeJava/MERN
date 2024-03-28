require('dotenv').config()

//require express package
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const workoutModel = require('./models/workoutModel')

//start up express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//react to requests '/' go to local host 4000
//routes
app.use('/api/workouts',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONG_URL)
  .then(() => {
    //listen for request port in express app
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

