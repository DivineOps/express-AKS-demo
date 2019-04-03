var assert = require('assert');
var cv = require('./scripts/currentvisitor');

describe('basic tests', () => {

    it('Check for 0', () => {
        assert.equal(cv.getCurrentVisitorNumber(0), 1);
    });

    it('Check for 1', () => {
        assert.equal(cv.getCurrentVisitorNumber(1), 2);
    });

    it('Check for 999', () => {
        assert.equal(cv.getCurrentVisitorNumber(999), 1000);
    });

    it('Check for -1', () => {
        assert.throws(() => cv.getCurrentVisitorNumber(-1));
    });
})