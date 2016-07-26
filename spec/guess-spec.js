const Guess = require('../main/guess');
const AnswerGenerator = require('../main/answerGenerator');

describe('Guess', ()=> {
    it('shoud get correct compare result', ()=> {
        spyOn(AnswerGenerator, 'generator')
            .and.returnValue('1234');
        const result = Guess.guessNumber('1234');
        expect(result).toEqual('4A0B');
    })
})