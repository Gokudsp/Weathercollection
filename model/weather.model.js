const mongoose = require('mongoose');
let schema = mongoose.Schema

let weatherschema = new schema({

    time :{type: String, default:DataTransfer.now,},
    temperature : String,

  })