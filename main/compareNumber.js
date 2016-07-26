class CompareNumber {

    static compareNumber(input, answers) {
        let first = 0;
        let second = 0;
       
        const compare = (inputArray, position, answers)=> {
            let result_first = 0;
            let result_second = 0;

            const answer = answers.find(answer => answer === parseInt(inputArray))
            if (answer) {

                position === answers.indexOf(answer) ? result_first++ : result_second++;
            }
            return {result_first, result_second}
        }

        const inputsArray = input.split("");

        const results_Array = inputsArray.map(inputArray=> {
            const position = inputsArray.indexOf(inputArray)
            const {result_first, result_second} = compare(inputArray, position, answers);
            return {result_first, result_second}
        })

        results_Array.forEach(result_Array=> {
            first += result_Array.result_first;
            second += result_Array.result_second;
        })
        return `${first}A${second}B`;
    }
}

module.exports = CompareNumber;