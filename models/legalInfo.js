// mongoose package
const mongoose = require('mongoose');

// schema for mongoose object
const Schema = mongoose.Schema;

let legalSchema = new Schema({
 CaseNo :{type:Number, required:true

}   ,
MentalCompetency:{type:Boolean},
FileDate:{type:String},
PriorAttorneyName:{type:String},
PriorAttorneyCaseload:{type:String},
Conviction:{type:{Charge:String , Degree:String , PunishmentRange:String ,Disposition:String }},
CurrentCourt:{type:String},
CourtAddress:{type:String},
JudgeName:{type:String},
CourtType:{type:String},
CaseCompletionDate:{type:String},
DefendantStatus:{type:String},
BondAmount:{type:Number},
NextLastSettingdate:{type:String}

    
})


module.exports = mongoose.model("legalSchema", legalSchema);

