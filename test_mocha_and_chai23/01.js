import { assert } from 'chai';
import { expect } from 'chai';
import { should } from 'chai';

// THIS SHOULD USE chai 5.x

console.log("not to have property ==> ", expect({a: 1, b:2}).to.not.have.property('b'));


// (4).should.be.above(3);                 // Asserts that 4 is greater than 3
// "name".should.be.a('string');           // Asserts that "name" is a string
// should.exist(null);                     // Demonstrates that null doesn't exist