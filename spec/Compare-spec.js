"use strict";
const CompareNumber = require('../main/compareNumber');
describe('guessNumber', ()=> {
        const answer = [1,2,3,4];
        it(' class CompareNumber ---- 4A0B', ()=> {
            const input = '1234';
            const expectText = '4A0B';
            expect(CompareNumber.compareNumber(input,answer)).toEqual(expectText);
        })

        it('class Comparenumber ----0A4B', ()=> {
            const input = '4321';
            const expectText = '0A4B';

            expect(CompareNumber.compareNumber(input,answer)).toEqual(expectText);
        })

        it('class Comparenumber ----xAxB', ()=> {
            const input = '1354';
            const expectText = '2A1B';

            expect(CompareNumber.compareNumber(input,answer)).toEqual(expectText);
        })

        it('class Comparenumber ----0A0B', ()=> {
            const input = '5678';
            const expectText = '0A0B';

            expect(CompareNumber.compareNumber(input,answer)).toEqual(expectText);
        })
})

