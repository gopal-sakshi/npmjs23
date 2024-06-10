const { Cube } = require('./cube23');
const expect = require('chai').expect;

describe('test_cube23', function () {
    it('01. length23', function (done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });

    it('02. surfaceArea23', function (done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });

    it('03. volume23', function (done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });

});