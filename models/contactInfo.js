// mongoose package
const mongoose = require('mongoose');

// schema for mongoose object
const Schema = mongoose.Schema;

let contactSchema = new Schema({
    HomePhone:{
        type: Number,   
    },
    WorkPhone:{
        type: Number,
    },
    CellPhone:{
        type: Number,
    },
    Other:{
        type: String,
    },
    PersonalEmail:{
        type: String,
    },
    OtherEmail:{
        type: String,
    },
    MaritalStatus:{
        type: String,
    },
    Language:{
        type: String,
    },
    Ethnicity:{
        type: String,
    }
},{
    collection: 'contactInfo' // the collection from database
})

// Links with the database
module.exports = mongoose.model('contact', contactSchema)