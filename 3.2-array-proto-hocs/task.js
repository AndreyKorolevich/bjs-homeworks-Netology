function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
   // sleep(500);
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

const compareArrays = (arr1, arr2) => {
    return (arr1.every((elem, index) => elem === arr2[index]) && arr1.length === arr2.length);
}

const memorize = (fn, limit) => {
    let memory = [];
    return (...args) => {
        if (memory.find(elem => compareArrays(elem.args, [...args])) !== undefined) {
     //       console.log('Result is taken from memory');
            return memory.find(elem => compareArrays(elem.args, [...args])).result;
        }
        memory.push({
            args: [...args],
            result: fn(...args),
        })
        if (memory.length > limit) {
            memory.shift();
        }
      //  console.log(memory);
      //  console.log('Result isn`t taken from memory');
        return fn(...args);
    };
}

let arr = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];

const testCase = (testFunction, timer) => {
    console.time(`${timer}`);
    for (let i = 0; i < 100; i++) {
        arr.forEach(function(elem){testFunction(elem) });
    }
    console.timeEnd(`${timer}`);
}
testCase(sum, 'simple'); 
testCase(memorize, 'better'); 


const mSum = memorize(sum, 5);
console.log(mSum(3, 4, 5, 5));
console.log(mSum(3, 4, 5));
console.log(mSum(3, 4, 5, 2));
console.log(mSum(3, 4, 5, 7));
console.log(mSum(2, 4, 5, 7));
console.log(mSum(1, 1, 5, 7))