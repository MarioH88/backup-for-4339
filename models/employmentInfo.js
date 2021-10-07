// mongoose package
const mongoose = require('mongoose');

// schema for mongoose object
const Schema = mongoose.Schema;

let empSchema = new Schema({
    EmployedDuration:{
        type: String,
    },
    Employer:{
        type: String,
    },
    Occupation:{
        type: String,
    },
    UnemployedDuration:{
        type: String,
    },
    RetiredDuration:{
        type: String
    }
},{
    collection: 'employmentInfo' // the collection from database
})

// Links with the database
module.exports = mongoose.model('employment', empSchema)