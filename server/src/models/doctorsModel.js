const mongoose = require("mongoose");

const doctorsSchema = new mongoose.Schema({ 
      name: {
        type: String,
        required: [true, 'Please provide name'],
        maxlength: 50,
        minlength: 3,
      },
      education:{
        type: String,
        required: [true, 'Please provide your education qualification'],
        maxlength: 50,
        minlength: 3,
      },
      experience:{
        type: String,
        required: [true, 'Please provide your experience '],
        maxlength: 50,
        minlength: 3,
      },
      email: {
        type: String,
        required: [true, 'Please provide your VIT email'],
        unique: true,
      },
      rating: {
        type: Number,
      },
      location: {
        type: String,
        required: [true, 'Please provide your location'],
      },
      clinics:{
        type:String,
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
    image:
    {
        type:String,
    },
    specialization:{
        type:String,
        required:[true],
      },
    isVerified:{
        type: Boolean,
    }
    });

module.exports = mongoose.model("doctors", doctorsSchema);