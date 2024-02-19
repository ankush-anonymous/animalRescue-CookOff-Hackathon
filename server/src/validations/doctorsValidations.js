const { check:doctorsCheck } = require('express-validator');

// TO-DO : Change this
exports.getByIdValidation = [
doctorscheck('shipmentId').isLength({min:1}).withMessage('ShipmentId could not be blank'),
];