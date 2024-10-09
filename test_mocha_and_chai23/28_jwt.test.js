const assert = require('chai').assert;
const jwtModule = require('./28_jwt23');
const setTimeoutPromise = require('util').promisify(setTimeout);

describe('JWT-TOKENIZATION', () => { 

    let sharedVar = 'save_the_token_here_and_pass_to_validateToken_testSpec___but_NOT_RECOMMENDED';
    let token23 = '';

    it('generateToken23', async () => { 
        const userName = 'user23';
        const password = 'pass23';
        const token = jwtModule.generateToken( {userName, password }, '5s');
        token23 = token;
        assert.isString(token);
    });

    // I wanted to pass the token to validateToken spec
    // But I was told, its ideal to keep tests separate
    // we can use shared variable ---> but not recommneded
    // if you want ---> combine both generate token & validate token in same test spec

    it.skip('validateToken', () => {
        const res = jwtModule.verifyToken(token23); 
        assert.isObject(res);
        assert.hasAnyKeys(res, ['success23', 'failure23']);       // res must have either of these keys
        assert.containsAllKeys(res, ['tokenData', 'info', 'success23']);
        assert.equal(res.info, 'token_success23');
    });

    it.skip('validateAfterExpiry23', function sync23NoArrow (done) {
        // overriding timeout from default 2s ---> 10s (DONT USE ARROW FN, this wont work)
        this.timeout(10000);
        setTimeout( () => {
            const res = jwtModule.verifyToken(token23); 
            assert.equal(res.errorMessage, 'TOKEN EXPIRED');
            done();
        }, 6000);
    });

    it('validateAfterExpiry24', async function notUsingArrow23() {
        // overriding timeout from default 2s ---> 10s (DONT USE ARROW FN, this wont work)
        this.timeout(10000);
        await setTimeoutPromise(6000);
        const res = jwtModule.verifyToken(token23); 
        assert.equal(res.errorMessage, 'TOKEN EXPIRED'); 
    });

})
