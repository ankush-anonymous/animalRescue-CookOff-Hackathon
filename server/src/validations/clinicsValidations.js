const { check:clinicsCheck } = require('express-validator');

// TO-DO : Change this
exports.getByIdValidation = [
clinicscheck('shipmentId').isLength({min:1}).withMessage('ShipmentId could not be blank'),
];