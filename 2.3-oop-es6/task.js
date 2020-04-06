// Task N1
class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.startDurability = durability;
        this.range = range;
    }

    takeDamage(damage) {
        this.durability = this.durability - damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
        if ((this.durability / this.startDurability) >= 0.3) {
            return this.attack;
        } else if (this.durability === 0) {
            return 0;
        } else {
            return (this.attack = this.attack / 2);
        }
    }

    isBroken() {
        if (this.durability > 0) {
            return false;
        }
        return true;
    }
}

const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);

const uberBow = new Weapon('Длинный лук', 15, bow.durability, 4);
const uberSword = new Weapon('Секира', 27, 800, sword.range);
const uberStaff = new Weapon('Посох Бури', 10, staff.durability, 3);
console.log(uberBow);
console.log(uberSword);
console.log(uberStaff);

sword.takeDamage(5);
console.log(sword.durability);
console.log(sword.getDamage());

sword.takeDamage(300);
console.log(sword.durability);
console.log(sword.getDamage());

arm.takeDamage(20);
console.log(arm.durability);

bow.takeDamage(20);
console.log(bow.durability);

bow.takeDamage(200);
console.log(bow.durability);

console.log(bow.durability);
console.log(bow.getDamage());

console.log(arm.durability);
console.log(bow.getDamage());

console.log(bow.durability);
console.log(bow.isBroken());

console.log(arm.durability);
console.log(arm.isBroken());

// Task 2
class SimpleWeapon extends Weapon {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range);
    }
}

class UberWeapon extends SimpleWeapon {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range);
    }
}

const uberKnife = new UberWeapon('Супер нож', 20, 2, 5);
console.log(uberKnife.name); // Лук
console.log(uberKnife.attack); // 10
console.log(uberKnife.durability); // 200
console.log(uberKnife.range);

// Task N3
class StudentLog {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (isNaN(grade) || (grade > 5) || (grade < 1)) {
            console.log(` Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
            if(this.marks[subject].length != 0) {
            return this.marks[subject].length;
            }
            return 0;
        }
        for (const sub in this.marks) {
            if (sub === subject) {
                this.marks.sub = this.marks[sub].push(grade);
                return this.marks.sub.length
            }

        }
        this.marks[subject] = [grade];
    }

    getAverageBySubject(subject) {
        for (const sub in this.marks) {
            if (sub === subject) {
                return (this.marks[sub].reduce((sum,elem) => sum + elem,0) / this.marks[sub].length);
            }
        }
        return 0;
    }

    getTotalAverage() {
        let sumAll = 0;
        let count = 0;
        for (const s of Object.keys(this.marks)) {
            console.log(s);
            if(s == 'sub') {
                continue;
            }
            sumAll += this.getAverageBySubject(s);
            count++;
        }
        if( sumAll === 0) {
            return 0;
        }
        return (sumAll / count)
    }
}
const andrew = new StudentLog('Andrew');

andrew.addGrade(2, 'algebra');
andrew.addGrade(3, 'algebra');
andrew.addGrade(4, 'algebra');
andrew.addGrade(5, 'algebra');
andrew.addGrade(2, 'geometry');
andrew.addGrade(42, 'geometry');
andrew.addGrade(3, 'geometry');
andrew.addGrade(4, 'geometry');
console.log(andrew);
console.log(andrew.getAverageBySubject('geometry'));
console.log(andrew.getAverageBySubject('algebra'));
console.log(andrew.getAverageBySubject('math'));
console.log(andrew);
console.log(andrew.getTotalAverage());