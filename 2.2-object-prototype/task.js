function getAnimalSound(animal) {
    if (animal === undefined) {
        return null;
    }
    let sound = animal.sound;
    return sound;
}

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }
    let average = marks.reduce(function(sum, element){
        return sum += Number(element);
    },0) / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    let now = new Date().getTime();
    let birthdays = new Date(birthday).getTime();
    let diff = (now - birthdays);
    let age = diff / (1000 * 60 * 60 * 24 * 365.25);
    if(age > 18) {
        return age;
    }
}