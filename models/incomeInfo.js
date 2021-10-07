// mongoose package
const mongoose = require('mongoose');

// schema for mongoose object
const Schema = mongoose.Schema;

let incomeSchema = new Schema({
    HeadofHousehold:{
        type: Boolean,
    },
    MonthlyIncome:{
        type: Number,
    },
    OtherIncome:{
        type: String,
    },
    SpousalSupport:{
        type: String,
    },
    WorkersComp:{
        type: String,
    },
    ChildSupport:{
        type: String,
    },
    TANF: {
        type: String,
    },
    SSI: {
        type: String,
    },
    Unemployement: {
        type: String,
    },
    SS: {
        type: Number,
    },
    Other: {
        type: String,
    }
},{
    collection: 'incomeInfo' // the collection from database
})

// Links with the database
module.exports = mongoose.model('income', incomeSchema)
