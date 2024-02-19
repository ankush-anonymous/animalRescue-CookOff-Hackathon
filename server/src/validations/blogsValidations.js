const { check:blogsCheck } = require('express-validator');

// TO-DO : Change this
exports.getByIdValidation = [
blogscheck('shipmentId').isLength({min:1}).withMessage('ShipmentId could not be blank'),
];