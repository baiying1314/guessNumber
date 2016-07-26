const scanf = require('scanf');
const AnswerGenerator = require('./answerGenerator');
const CompareNumber = require('./compareNumber');
class FinalGame {
    static play() {
        const judgeDuplicate = (inputsArray) =>{
            for (const inputArray of inputsArray) {
                if (inputsArray.indexOf(inputArray) != inputsArray.lastIndexOf(inputArray)) {
                    console.log("can't input duplicate numbers");
                    return false;
                }
            }
            return true;
        }
        console.log(`Welcome!
        `);
        let count = 6;
        const answer = AnswerGenerator.generator();

        for (let i = count; i > 0;i--) {
            console.log(`please input your number(${i}):`);
            const input = scanf('%s');
            const inputsArray = input.split("");
            if(!judgeDuplicate(inputsArray)){
                i++;
                continue;
            }
            const result = CompareNumber.compareNumber(input, answer);

            if (result === "4A0B") {
                console.log("Congratulations!");
                return;
            }
            console.log(result);
        }
        console.log("Game over");
        console.log(answer);
        return;
    }

}

module.exports = FinalGame;