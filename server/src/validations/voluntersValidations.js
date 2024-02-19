const { check:voluntersCheck } = require('express-validator');

// TO-DO : Change this
exports.getByIdValidation = [
volunterscheck('shipmentId').isLength({min:1}).withMessage('ShipmentId could not be blank'),
];