const mongoose = require("mongoose");

const ClinicsSchema = new mongoose.Schema({ 
  name: {
    type: String,
    required: [true, 'Please provide name'],
    maxlength: 50,
    minlength: 3,
      },
  address:{
    type:String,
    required:[true,'Please provide your address'],
      },
  phoneno:{
    type:Number,
    required:[true,'Please provide your phone number'],
    match:[
        /^\d{10}$/,
        'Please provide a valid phone number',
        ],
    unique:true,
    },
    specialization:{
      type:String,
    },
    established:{
      type :Date,
    },
    rating: {
      type: Number,
    },
    image:
    {
        type:String,
    },
    isVerified:{
        type: Boolean,
    }
    });

module.exports = mongoose.model("clinics", ClinicsSchema);