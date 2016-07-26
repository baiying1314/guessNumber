const CompareNumber = require('../main/compareNumber');

describe('guessNumber', ()=> {
    const result = '1234'
    it(' class CompareNumber ---- 4A0B', ()=> {
        const input = '1234';
        const expectText = '4A0B';
        const testNumber = new CompareNumber(input, result);
        expect(testNumber.compareNumber()).toEqual(expectText);
    })
})

