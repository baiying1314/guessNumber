class CompareNumber {
    constructor(input, result) {
        this.input = input;
        this.result = result;
    }

    compareNumber() {
        const split = (input)=> {
            return input.split('');
        }

        const compare = (inputArray, position, resultsArray)=> {
            let result_first = 0;
            let result_second = 0;
            const resultArray = resultsArray.find(resultArray => resultArray === inputArray)
            if (resultArray) {
                position === resultsArray.indexOf(resultArray) ? result_first++ : result_second++;
            }
            return {result_first, result_second}
        }


        const inputsArray = split(this.input);
        const resultsArray = split(this.result);

        const results_Array = inputsArray.map(inputArray=> {
            const position = inputsArray.indexOf(inputArray)
            const {result_first, result_second} = compare(inputArray, position, resultsArray);
            return {result_first, result_second}
        })
        // console.log(results_Array);
        // const result = results_Array.reduce((a, b) => {
        //     console.log(typeof (a.result_first));
        //     return {first:a.result_first+b.result_first,second:a.result_second+b.result_second};
        //
        // })
        // console.log(result.first);
        let first = 0;
        let second = 0;
        results_Array.forEach(result_Array=>{
            first += result_Array.result_first;
            second+=result_Array.result_second;
        })
        return `${first}A${second}B`;
    }
}

module.exports = CompareNumber;