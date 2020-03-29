'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
    const percents = Number(percent) / (12 * 100);
    const contributions = Number(contribution);
    const amounts = Number(amount);
    const nowDate = new Date();
    let totalAmount;
    if (isNaN(percents)) {
        return `Параметр percent 
        содержит неправильное значение ${percents}`;
    }
    if (isNaN(contributions)) {
        return `Параметр contribution 
        содержит неправильное значение ${contributions}`;
    }
    if (isNaN(amounts)) {
        return `Параметр amount 
        содержит неправильное значение ${amounts}`;
    }

    const amountMonth = Math.floor((date.getTime() - nowDate) / (1000 * 60 * 60 * 24 * 30));
    const bodyCredit = amounts - contributions;
    const monthlyPayment = bodyCredit * (percents + percents / ((Math.pow((1 + percents), amountMonth)) - 1));
    totalAmount = (amountMonth * monthlyPayment);
    totalAmount = Number(totalAmount.toFixed(2));

    return totalAmount;
}

function getGreeting(name) {
    if (name == '' || name == undefined || name == null) {
        return `Привет, мир! Меня зовут Аноним`;
    }
    return `Привет, мир! Меня зовут ${name}`

}