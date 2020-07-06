const app = require('../program');

describe('add() function', () => {
    it('should add 10 and 15', () => {
        expect(app(10, 15)).toEqual(25);
    });
});
