const fs = require('fs');
const jwt = require('jsonwebtoken');
var jwtInterface = {};

var privateKey = fs.readFileSync('test_mocha_and_chai23/28_privateKey.pem', 'utf8');
var publicKey = fs.readFileSync('test_mocha_and_chai23/28_publicKey.pem', 'utf8');


jwtInterface.generateToken = function(payload, expiry = "10h", algo = "RS256") {

    // SIGNING OPTIONS
    var signOptions = {
        issuer:  'gopalNpmJs23',
        subject:  'some@user.com',
        audience:  'audience23',
        expiresIn:  expiry,
        algorithm:  algo
    };

    var jwtToken = jwt.sign(payload, privateKey, signOptions);
    return jwtToken;    
}


jwtInterface.verifyToken = function(token23) {

    try {
        var tokenData = jwt.verify(token23, publicKey);
        return { tokenData, info: 'token_success23', success23: true }
    } catch(error) {
        if (error.name == jwt.TokenExpiredError.name) {
            return { errorMessage: 'TOKEN EXPIRED', info: 'token_failed23', failure23: true }
        } else {
            return { errorMessage: 'INVALID TOKEN', info: 'token_failed23', failure23: true }
        }        
    }
    
}

module.exports = jwtInterface