class Student {
    constructor (name, rollNo, fees) {
        this.name = name;
        this.rollNo = rollNo;
        this.fees = fees;
    }

    getInput () {
        for (let i = 0; i < 5; i++) {
            this.name = prompt("Enter you name is here")
            this.rollNo = prompt("Enter you Roll No. is here ");
            this.rollNo = parseInt(this.rollNo);
            this.fees= prompt("Enter your fees");
            this.fees = parseInt(this.fees)
            
        }
    }
    displayData() {
        for (let i = 0; i < 5; i++) {
            console.log(`Your name is ${this.name}`);
            console.log(`Your name is ${this.rollNo}`);
            console.log(`Your name is ${this.fees}`);
            
        }
    }
}

const student1 = new Student;
student1.getInput();
student1.displayData();
