// mongoose package
const mongoose = require('mongoose');

// schema for mongoose object
const Schema = mongoose.Schema;

let educationSchema = new Schema({
    AttendedSchool:{
        type: Boolean,
    },
    SchoolName:{
        type: String,
    },
    LastGrade:{
        type: String,
    },
    Graduated:{
        type: String,
    },
    Certification:{
        type: String,
    }
},{
    collection: 'educationInfo' // the collection from database
})

// Links with the database
module.exports = mongoose.model('education', educationSchema)