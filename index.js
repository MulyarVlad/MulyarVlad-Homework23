class Student {

    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.marks = [];
        this._presence = new Array(25);
        this._current = 0;
    }

    get info() {
        console.log(`Student: ${this.firstName}, Lastname: ${this.lastName}, age: ${this.age}`);
    }

    get age() {
        return new Date().getFullYear() - this.birthday;
    }

    get averageMark() {
        let count = 0;
        sum = this.marks.reduce((a, b) => {++count; return a + b;});
        return sum / 25
    }

    get averagePresence() {
        let count = 0;
        sum = this._presence.reduce((a, b) => {++count; return a + b;});
        return sum / 25
    }

    present(mark) {
        if (this._current === this._presence.length) {
            throw new RangeError("It's impossible") 
            this.marks[this._current] = mark;
            this._presence[this._current++] = true;
        }
    }

    absent() {
        if (this._current === this._presence.length) {
            throw new RangeError("It's impossible")
            this._presence[this._current++] = false;
        }
    }

    summary() {
        if (this.averageMark > 90 && this.averagePresence > 0.9) {
            console.log("Awesome!");
        } else if (this.averageMark < 90 && this.averagePresence < 0.9) {
            console.log("Good!");
        } else if (this.averageMark < 90 || this.averagePresence < 0.9) {
            console.log("It is okay but you can do better.");
        }
    }
}


const helen = new Student ("Helen", "Kortas", 1967)
const bob = new Student ("Bob", "Yung", 1994)
const dray = new Student ("Dray", "Warley", 1979)

helen.present(95);
helen.present(95);
helen.present(95);

helen.summary();

helen.info();