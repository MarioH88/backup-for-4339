// mongoose package
const mongoose = require('mongoose');

// schema for mongoose object
const Schema = mongoose.Schema;

let healthSchema = new Schema({
    HealthInsurance:{
        type: String,
        required: true
    },
    FoodStamps:{
        type: String,
    },
    SubstanceUse:{
        type: String,
    },
    Treatment:{
        type: String,
    },
    TreamentHistory:{
        type: String
    }
},{
    collection: 'educationInfo' // the collection from database
})

// Links with the database
module.exports = mongoose.model('healthInfo', healthSchema)
