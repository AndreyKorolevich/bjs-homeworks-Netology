class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(startAct, act, iD) {
        try {
            if (iD === undefined) {
                throw new Error('ID isn`t defined');
            }
            if (this.alarmCollection.find(elem => elem.id === iD) !== undefined) {
                throw new Error('This ID has already been defined');
            }
            this.alarmCollection.push({
                id: iD,
                time: startAct,
                callback: act,
            })
            console.log(this.alarmCollection);
        } catch (err) {
            console.error(err);
        }
        return;


    }

    removeClock(iD) {
        let resultDelete;
        this.alarmCollection = this.alarmCollection.filter(elem => {
            if (elem.id !== iD) {
                resultDelete = true;
                return true;
            } else {
                resultDelete = false;
                return false;
            }
        })
        return resultDelete;
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0, -3);
    }

    start() {
        const checkClock = (call) => {
            if (call.time === new Date().toLocaleTimeString().slice(0, -3)) {
                call.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(elem => checkClock(elem)), 1000);
            console.log(this.timerId);
        }

    }

    stop() {
        if (this.timerId !== null) {
            clearInterval();
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(elem => console.log(elem.id + ' ' + elem.time));
    }

    clearAlarms() {
        clearInterval();
        this.alarmCollection.forEach(elem => this.removeClock(elem.id));
    }
}

const phoneAlarm = new AlarmClock();
phoneAlarm.addClock('10:12', () => console.log('We`re going to bed soon'), 1);
phoneAlarm.addClock('10:13', () => {
    console.log('It`s time to go to bed'), phoneAlarm.removeClock(2)
}, 2);
phoneAlarm.addClock('16:01', () => console.log('Go to wash'));
phoneAlarm.addClock('10:14', () => {
    console.log('Go to bed, you`re going to get up early tomorrow');
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
}, 3);
phoneAlarm.addClock('16:05', () => console.log('Go to bed, you`re going to get up early tomorrow'), 3);
phoneAlarm.printAlarms();
phoneAlarm.start();
