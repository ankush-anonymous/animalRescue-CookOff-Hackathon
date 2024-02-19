const mongoose = require("mongoose");

const animalsSchema = new mongoose.Schema({ 

name: {
type: String,
required: [true, "Please provide name"],
maxlength: 50,
minlength: 3,
},
color:{
    type:String,
},
Type:{
    type:String
},
Breed:{
    type:String
},
Photo:{
    type:String
},
Identification_Mark:{
    type:String
},
locationOfFound:{
    type:String
},
Condition:{
    type:String
}
})

module.exports = mongoose.model("animals", animalsSchema);