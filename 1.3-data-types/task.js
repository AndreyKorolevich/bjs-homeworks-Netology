'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
    let percents = Number(percent) / (12 * 100);
    let contributions = Number(contribution);
    let amounts = Number(amount);
    let nowDate = new Date();
    let totalAmount;
    if (isNaN(percents)) {
        totalAmount = `Параметр percent 
        содержит неправильное значение ${percents}`;
    } else if (isNaN(contributions)) {
        totalAmount = `Параметр contribution 
        содержит неправильное значение ${contributions}`;
    } else if (isNaN(amounts)) {
        totalAmount = `Параметр amount 
        содержит неправильное значение ${amounts}`;
    }

    let amountMonth = Math.floor((date.getTime() - nowDate) / (1000 * 60 * 60 * 24 * 30));
    let bodyCredit = amounts -  contributions;
    let monthlyPayment = bodyCredit * (percents + percents / ((Math.pow((1 + percents), amountMonth)) - 1));
    console.log(monthlyPayment);
    totalAmount = (amountMonth * monthlyPayment);
    console.log(totalAmount);
    totalAmount = Number(totalAmount.toFixed(2));

     return totalAmount;
}

function getGreeting(name) {
    if(name == '' || name == undefined || name == null) {
        name = 'Аноним';
    }
    let greeting = `Привет, мир! Меня зовут ${name}`
     return greeting;
}