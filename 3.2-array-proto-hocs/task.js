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
    arr1.every((elem, index) => elem === arr2[index]) && arr1.length === arr2.length;
}

const memorize = (fn, limit) => {
    let memory = [];
    return (...args) => {
        const arg = memory.find(elem => compareArrays(elem.args, [...args]));
        if (arg !== undefined) {
     //       console.log('Result is taken from memory');
            return arg;
        }
        const sum = fn(...args);
        memory.push({
            args: [...args],
            result: sum,
        })
        if (memory.length > limit) {
            memory.shift();
        }
      //  console.log(memory);
      //  console.log('Result isn`t taken from memory');
        return sum;
    };
}

let arr = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];

const testCase = (testFunction, timer) => {
    console.time(timer);
    for (let i = 0; i < 1000; i++) {
        arr.forEach(function(elem){testFunction(elem) });
    }
    console.timeEnd(timer);
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