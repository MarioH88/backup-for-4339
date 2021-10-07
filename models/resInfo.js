// mongoose package
const mongoose = require('mongoose');

// schema for mongoose object
const Schema = mongoose.Schema;

let resSchema = new Schema({
    Address:{
        type: String,
        required: true
    },
    City:{
        type: String,
        required: true
    },
    State:{
        type: String,
        required: true
    },
    ZipCode:{
        type: Number,
        required: true
    },
    County:{
        type: String,
        required: true
    },
    HeightWeight:{
        type: String,
    },
    Custody:{
        type: Boolean,
    },
    YesCustody:{
        type: String,
    },
    Adelphoi:{
        type: String
    },
    TotalRent:{
        type: Number
    }
},{
    collection: 'residenceInfo' // the collection from database
})

// Links with the database
module.exports = mongoose.model('residence', resSchema)
