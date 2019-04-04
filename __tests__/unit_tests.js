var cv = require('../scripts/currentvisitor');

describe('basic tests', () => {

    test('Check for 0', () => {
        expect(cv.getCurrentVisitorNumber(0)).toBe(1);
    });

    test('Check for 1', () => {
        expect(cv.getCurrentVisitorNumber(1)).toBe(2);
    });

    test('Check for 999', () => {
        expect(cv.getCurrentVisitorNumber(999)).toBe(1000);
    });

    test('Check for -1', () => {
        expect( () => cv.getCurrentVisitorNumber(-1)).toThrow();
    });
})
