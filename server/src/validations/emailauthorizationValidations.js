const { check:emailauthorizationCheck } = require('express-validator');

// TO-DO : Change this
exports.getByIdValidation = [
emailauthorizationcheck('shipmentId').isLength({min:1}).withMessage('ShipmentId could not be blank'),
];