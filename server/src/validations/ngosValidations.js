const { check:ngOsCheck } = require('express-validator');

// TO-DO : Change this
exports.getByIdValidation = [
ngOscheck('shipmentId').isLength({min:1}).withMessage('ShipmentId could not be blank'),
];