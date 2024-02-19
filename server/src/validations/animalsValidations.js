const { check:animalsCheck } = require('express-validator');

// TO-DO : Change this
exports.getByIdValidation = [
animalscheck('shipmentId').isLength({min:1}).withMessage('ShipmentId could not be blank'),
];