const mongoose = require("mongoose");

const ngosSchema = new mongoose.Schema({ 
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
        isVerified:{
            type: Boolean,
        },
        established:{
            type :Date,
          },
        certification:{
            type:String,
        },
        locationOfService:{
            type:String
        },

})

module.exports = mongoose.model("ngos", ngosSchema);