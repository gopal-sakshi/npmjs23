const express = require('express');
const router = express.Router();
const { route23Schema } = require('./joiValidators');
/****************************************************/
var Joi = require('joi');

const schema = Joi.object({
    
})
/****************************************************/
const joiValidation = async (req, res, next) => {
    const {error, value } = route23Schema.validate(req.body, {stripUnknown:true});      // validate method returns object with 2 keys (error, value)
    if(error) {
        return res.send({info: "joi validation failed", err: error.details[0].message });
    } else {
        return next();
    }

}

router.get('/route23', validateRoute('route23'), (req, res) => {

});


router.post('/route24', (req, res) => {

});


module.exports = router;