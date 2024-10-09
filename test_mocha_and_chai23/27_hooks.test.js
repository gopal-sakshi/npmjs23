const assert = require('chai').assert;

describe('testSuite23', function () {
    let before23 = after23 = beforeEach23 = afterEach23 = 0;

    after(function () {
        after23 = after23 + 1;
        console.log("after test spec executed23 ===> ", before23, beforeEach23, afterEach23, after23);
    });

    afterEach(function () {
        afterEach23 = afterEach23 + 1;
        // console.log("afterEach23 count ====> ", afterEach23);
    });

    // runs before each test in this block
    beforeEach(function () {
        beforeEach23 = beforeEach23 + 1;
        // console.log("beforeEach23 count ===> ", beforeEach23);
    });

    // runs before all tests in this block; ORDER isnt important... before() still executes first
    before(function () {
        before23 = before23 + 1;
        // console.log("before test spec executed23 ===> ", before23);
    });

    const testAdd = ({ args, expected }) => {
        return function() {
            let sum23 = args.reduce((partialSum, a) => partialSum + a, 0);
            assert.strictEqual(sum23, expected)  
        }
    }
    // it.only('2Args', testAdd({args: [1, 2], expected: 3}));
    it.skip('3Args', testAdd({args: [1, 2, 3], expected: 6}));          // shown as PENDING
    it('4Args', testAdd({args: [1, 2, 3, 4], expected: 10}));

    it('2Args', testAdd({args: [3, 4], expected: 7}));
    it('3Args', testAdd({args: [3, 4, -7], expected: 0}));
    it('4Args', testAdd({args: [4, 5, 0, -1], expected: 8}));

});