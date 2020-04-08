// Task N1
class Weapon {
    constructor(weapon) {
        this.name = weapon.name;
        this.attack = weapon.attack;
        this.durability = weapon.durability;
        this.startDurability = weapon.durability;
        this.range = weapon.range;
    }

    takeDamage(damage) {
        this.durability = this.durability - damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
        if(this.durability === 0){
            return 0;
        }
        if (isNaN(this.durability / this.startDurability) || ((this.durability / this.startDurability) >= 0.3)) {
            return this.attack;
        }
            return (this.attack / 2);
    }

    isBroken() {
        if (this.durability > 0) {
            return false;
        }
        return true;
    }
}

const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});
const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
});
const sword = new Weapon({
    name: 'Меч',
    attack: 25,
    durability: 500,
    range: 1,
});
const knife = new Weapon({
    name: 'Нож',
    attack: 5,
    durability: 300,
    range: 1,
});
const staff = new Weapon({
    name: 'Посох',
    attack: 8,
    durability: 300,
    range: 2,
});

const uberBow = new Weapon({
    name: 'Длинный лук',
    attack: 15,
    durability: bow.durability,
    range: 4,
});
const uberSword = new Weapon({
    name: 'Секира',
    attack: 27,
    durability: 800,
    range: sword.range,
});
const uberStaff = new Weapon({
    name: 'Посох Бури',
    attack: 10,
    durability: staff.durability,
    range: 3,
});

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
class Arm extends Weapon {
    constructor() {
        super({
            name: 'Рука',
            attack: 1,
            durability: Infinity,
            range: 1,
        });
    }
}

class Bow extends Weapon {
    constructor() {
        super({
            name: 'Лук',
            attack: 10,
            durability: 200,
            range: 3,
        });
    }
}

class Sword extends Weapon {
    constructor() {
        super({
            name: 'Меч',
            attack: 25,
            durability: 500,
            range: 1,
        });
    }
}

class Knife extends Weapon {
    constructor() {
        super({
            name: 'Нож',
            attack: 5,
            durability: 300,
            range: 1,
        });
    }
}

class Staff extends Weapon {
    constructor() {
        super({
            name: 'Посох',
            attack: 8,
            durability: 300,
            range: 2,
        });
    }
}

class LongBow extends Bow {
    constructor() {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;

    }
}

class Axe extends Sword {
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
}

class StormStaff extends Staff {
    constructor() {
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;

    }
}



const arm1 = new Arm();
const bow1 = new Bow();
const sword1 = new Sword();
const knife1 = new Knife();
const staff1 = new Staff();

console.log(arm1);

const uberBow1 = new LongBow();
const uberSword1 = new Axe();
const uberStaff1 = new StormStaff();
console.log(uberBow1.name);
console.log(uberBow1.attack);
console.log(uberBow1.durability);
console.log(uberBow1.range);

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
            if (this.marks[subject].length != 0) {
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
                return (this.marks[sub].reduce((sum, elem) => sum + elem, 0) / this.marks[sub].length);
            }
        }
        return 0;
    }

    getTotalAverage() {
        let sumAll = 0;
        let count = 0;
        for (const s of Object.keys(this.marks)) {
            console.log(s);
            if (s == 'sub') {
                continue;
            }
            sumAll += this.getAverageBySubject(s);
            count++;
        }
        if (sumAll === 0) {
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