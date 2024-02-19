const mongoose = require("mongoose");

const voluntersSchema = new mongoose.Schema({ 
name:{
    type:String
},
Age:{
    type:Number
},
Phoneno:{
    type:Number
},
Education:{
    type:String
},
Experience:{
    type:String
},
Photo:{
    type:String
},
VerificationId:{
    type:Number
},
ReasonForJoining:{
    type:String
}
})

module.exports = mongoose.model("volunters", voluntersSchema);