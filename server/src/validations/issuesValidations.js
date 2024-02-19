const { check:issuesCheck } = require('express-validator');

// TO-DO : Change this
exports.getByIdValidation = [
issuescheck('shipmentId').isLength({min:1}).withMessage('ShipmentId could not be blank'),
];