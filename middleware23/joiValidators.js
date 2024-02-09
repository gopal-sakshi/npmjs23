const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeatPw: Joi.ref('password'),
    access_token: [ Joi.string(), Joi.number() ],
    birth_year: Joi.number().integer().min(1900).max(2013),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
});

console.log(userSchema.validate({ username: 'abc', birth_year: 1994 }));
console.log(userSchema.validate({ username: 'abc', birth_year: 2014 }));

/*********************************************************************************/

const route23 = Joi.object({
    playerId: '',
    dateOfBirth : Joi.date().iso().required(),
    pastClubs: Joi.array().items(Joi.string()),
    favoritePlayers: Joi.array().items(Joi.string().valid('messi').forbidden()).max(3),
    isActive: Joi.boolean()
})

const route24Schema = {
    params: Joi.object().keys({
        year: Joi.number().required(),
        topic: Joi.string().required()
    }),
    query: Joi.object().keys({
        offset: Joi.number().required(),
        limit: Joi.number().required(),
        language: Joi.string().valid('tamil', 'telugu', 'english').insensitive().default('telugu')
    })
}

async function validateRoute(routeId) {
    
}

module.exports = {
    route24Schema,
    validateRoute
}
/*********************************************************************************/