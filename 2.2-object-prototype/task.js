function getAnimalSound(animal) {
    if (animal === undefined) {
        return null;
    }
    const sound = animal.sound;
    return sound;
}

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }
    let average = marks.reduce(function(sum, element){
        return sum += Number(element);
    },0) / marks.length;
    const roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    const now = new Date().getTime();
    const birthdays = new Date(birthday).getTime();
    const diff = (now - birthdays);
    const age = diff / (1000 * 60 * 60 * 24 * 365.25);   
        return age >= 18;
}