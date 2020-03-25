'use strict';
function getResult(a,b,c){
    let x = [];
    let rootFirst;
    let rootSecond;
    let discriminant = Math.pow(b,2) - (4 * a * c);
    console.log(discriminant);
    if(discriminant === 0) {
        rootFirst = -b / (2 * a);
        x.push(rootFirst);
    }else if (discriminant > 0) {
        rootFirst = (-b + Math.sqrt(discriminant)) / (2 * a);  
        rootSecond = (-b - Math.sqrt(discriminant)) / (2 * a);
        x.push(rootFirst, rootSecond);
    }
     return x;
}

function getAverageMark(marks){
    let averageMark = 0;
    if (marks.length > 5) {
        console.log(`Отметок больше 5 - ${marks}`);
        marks = marks.slice(0,5);
        averageMark = marks.reduce((sum, element) => sum + element, 0) / 5;
    }else if (marks.length > 0) {
        averageMark = marks.reduce((sum, element) => sum + element, 0) / marks.length ;
    }
     return averageMark;
}

function askDrink(name,dateOfBirthday){
    let result;
    let date = new Date();
    let age = date.getFullYear() - dateOfBirthday.getFullYear();
    if(age >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    }else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
     return result;
}