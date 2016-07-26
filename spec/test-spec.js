"use strict";
const CompareNumber = require('../main/compareNumber');

describe('guessNumber', ()=> {
    const result = '1234';
    it(' class CompareNumber ---- 4A0B', ()=> {
        const input = '1234';
        const expectText = '4A0B';
        const testNumber = new CompareNumber(input, result);

        expect(testNumber.compareNumber()).toEqual(expectText);
    })

    it('class Comparenumber ----0A4B',()=>{
            const input = '4321';
            const expectText = '0A4B';
            const testNumber = new CompareNumber(input, result);

            expect(testNumber.compareNumber()).toEqual(expectText);
    })

    it('class Comparenumber ----xAxB',()=>{
        const input = '1354';
        const expectText = '2A1B';
        const testNumber = new CompareNumber(input, result);

        expect(testNumber.compareNumber()).toEqual(expectText);
    })
})

