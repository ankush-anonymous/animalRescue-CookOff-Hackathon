const mongoose = require("mongoose");

const issuesSchema = new mongoose.Schema({ 
AnimalId:{
    type:String
},
Health_Condition:{
    type:String
},
Description:{
    type:String
},
Treatement:{
    type:String
},
IssueRaisedOn:{
    type:Date
},
ClosedOn:{
    type:Date
},

})

module.exports = mongoose.model("issues", issuesSchema);