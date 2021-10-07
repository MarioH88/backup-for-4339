// mongoose package
const mongoose = require('mongoose');


// schema for mongoose object
const Schema = mongoose.Schema;

// create unique id
const uuid = require('uuid'); 

// create the general info schema to the general info colleciton
let genInfoSchema = new Schema({
    _id: { type: String, default: uuid.v1 },
    CaseNumber:{
        type: Number,
        // required: true
    },
    ClientNumber:{
        type: Number,
        // required: true
    },
    StartDate:{
        type: Date,
    },
    CloseDate:{
        type: Date,
    },
    LastName: {
        type: String,
        // required: true
    },
    FirstName: {
        type: String,
        // required: true
    },
    MiddleName: {
        type: String,
    },
    BirthDate: {
        type: Date,
    },
    SocialSecurity: {
        type: Number,
    },
    USCitizen: {
        type: Boolean,
    },
    Gender: {
        type: String,
    },
    TXDL: {
        type: Number,
    }
},{
    collection: 'generalInfo' // the collection from database
})

// Links with the database

module.exports =mongoose.models['generalInfo'] || mongoose.model('generalInfo', genInfoSchema);
