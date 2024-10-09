const { dummyFn1 } = require("./24_async");
const expect = require('chai').expect;
const assert = require('chai').assert;


describe('async_test22_TITLE', () => {
    it('spec22a', () => {
        return dummyFn1().then(result => {
            expect(result).to.have.property('status23');
            expect(result).to.have.property('time23');
        })
    })
});