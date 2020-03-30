 //Task N1
 let getSolutions = (a, b, c) => {
     let D = Math.pow(b, 2) - 4 * a * c;
     if (D < 0) {
         return {
             'D': D,
             roots: []
         }
     }
     if (D === 0) {
         let x1 = -b / (2 * a);
         return {
             'D': D,
             roots: [x1]
         };
     }
     if (D > 0) {
         let x1 = (-b + Math.sqrt(D)) / (2 * a);
         let x2 = (-b - Math.sqrt(D)) / (2 * a);
         return {
             'D': D,
             roots: [x1, x2]
         };
     }
 }

 let showSolutionsMessage = (a, b, c) => {
     let result = getSolutions(a, b, c);
     console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + c`);
     console.log(`Значение дискриминанта: ${result.D}`);
     if (result.D < 0) {
         console.log(`Уравнение не имеет вещественных корней`);
     }
     if (result.D === 0) {
         console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
     }
     if (result.D > 0) {
         console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
     }
 }

 showSolutionsMessage(1, 2, 3);
 showSolutionsMessage(7, 20, -3)
 showSolutionsMessage(2, 4, 2)

 // Task N2
 let getAverageMark = (marks) => {
     if (marks.length === 0) {
         return 0;
     }
     return marks.reduce(function (sum, elem) {
         return sum + elem
     }, 0) / marks.length;
 }

 let isEmpty = (obj) => {
     for (let key in obj) {
         return true;
     }
     return false;
 }

 let getAverageScore = (data) => {
     let count = 0;
     let sum = 0;
     console.log(isEmpty(data));
     if (isEmpty(data)) {
         for (const subject in data) {
             data[subject] = getAverageMark(data[subject]);
         }
         for (const subject in data) {
             sum += data[subject];
             count++;
         }
         data.average = sum / count;
         return data;
     } else {
         data.average = 0;
         return data;
     }

 }

 console.log(getAverageScore({}));
 // Task N3;
 let getDecodedValue = (secret) => {
     if (secret === 0) {
         return "Родриго";
     }
     if (secret === 1) {
         return "Эмильо";
     }
 }
 let getPersonData = (secretData) => {
    let result = {
        firstName: null,
        lastName: null
    }
    result.firstName = getDecodedValue(secretData.aaa);
    result.lastName = getDecodedValue(secretData.bbb);
    return result;
 }

 console.log(getPersonData({
     aaa: 0,
     bbb: 1   
 }));
 console.log(getPersonData({
    aaa: 1,
    bbb: 0   
}));
console.log(getPersonData({
    aaa: 0,
    bbb: 0   
}));
console.log(getPersonData({
    aaa: 1,
    bbb: 1   
}));