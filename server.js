const express = require('express')
const app = express()
const mongoose = require('mongoose');
let schema = mongoose.Schema

require('dotenv').config()
mongoose.connect(process.env.DBURL) 
const database =mongoose.connection
database.on('connected',() => console.log('Database Connected'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.listen(3000, () => {
    console.log("Server is running... " + 3000);
  });

  var cron = require('node-cron');

  cron.schedule('* * * * *', async () => {
    let a ="app_temp"
    
    console.log('running a task every minute',a);
  });


  // controllers:
  let weather = require('./controller/weather.controller');
  app.get(`/current-weather/salem`, weather.getweather);

  app.post(`/current-weather`, weather.getweatherByCoord);