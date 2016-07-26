const CompareNumber = require('./compareNumber');
const Answergenerator = require('./answerGenerator');
class Guess {
    static guessNumber(input) {
        const answer = Answergenerator.generator();
        const result = CompareNumber.compareNumber(input,answer);
        return result;
    }
}

module.exports = Guess;