export class Repeat {
    static NEVER = "NEVER";
    static EVERY_DAY = "EVERY_DAY";
    static EVERY_WEEK = "EVERY_WEEK";
    static EVERY_MONTH = "EVERY_MONTH";
    static EVERY_YEAR = "EVERY_YEAR";

    #frequency

    constructor(frequency) {
        this.#frequency = frequency || Repeat.NEVER;
    }

    never(){
        this.#frequency = Repeat.NEVER;
    }

    everyDay(){
        this.#frequency = Repeat.EVERY_DAY;
        return this
    }

    everyWeek(){
        this.#frequency = Repeat.EVERY_WEEK;
        return this
    }

    everyMonth(){
        this.#frequency = Repeat.EVERY_MONTH;
        return this
    }

    everyYear(){
        this.#frequency = Repeat.EVERY_YEAR;
        return this
    }

    toJSON(){
        return this.#frequency;
    }

    toString(){
        return this.#frequency;
    }
}

/*
    Mon-Fri 9am-5pm 1hr appts
 */

export class Schedule {
    static EVERY_DAY = "EVERY_DAY";
    static EVERY_WEEK = "EVERY_WEEK";
    static EVERY_MONTH = "EVERY_MONTH";
    static EVERY_YEAR = "EVERY_YEAR";

    constructor({title, location, start, end, repeat}) {
        this.title = title;
        this.start = start && new Date(start) || new Date(Date.now());
        this.end = end && new Date(end) || new Date(Date.now());
        this.location = location;
        this.repeat = new Repeat(repeat);
    }

    toString(){
        return `${this.title.toUpperCase()}\nstart:\t\t${this.start.toLocaleString()}\nend:\t\t${this.end.toLocaleString()}\nlocation:\t${this.location}\nrepeat:\t\t${this.repeat}`
    }

    toJSON(){
        return {
            title: this.title,
            start: this.start,
            end: this.end,
            location: this.location,
            repeat: this.repeat.toString()
        }
    }

    includes(schedule){

    }
}

export function makeAppointment(schedule, id) {

}




let availability = {
    2: [9, 10, 11, 12, 1, 2, 3, 4, 5],
    3: [9, 10, 11, 12, 1, 2, 3, 4, 5],
    4: [9, 10, 11, 12, 1, 2, 3, 4, 5]
}