import { assert } from 'chai_v5';
import { expect } from 'chai_v5';
import { should } from 'chai_v5';

// THIS SHOULD USE chai 5.x ----> which is ESM only
// IGNOREEEEEEEEEEEEEEEEEEEEEe --- import statement not allowed outside module ERROR

describe('chai_v5', () => {
    it('blahblah1', done => {        
        var foo = 'bar'
        var beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
        foo.should.be.a('string');
        foo.should.equal('bar');
        foo.should.have.lengthOf(3);
        beverages.should.have.property('tea').with.lengthOf(3);
        expect({a: 1, b:2}).to.not.have.property('b')
    });
});

console.log("not to have property ==> ", expect({a: 1, b:2}).to.not.have.property('b'));


// (4).should.be.above(3);                 // Asserts that 4 is greater than 3
// "name".should.be.a('string');           // Asserts that "name" is a string
// should.exist(null);                     // Demonstrates that null doesn't exist