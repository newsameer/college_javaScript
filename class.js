class Student {
    formSub(name,tickt){
        this.name = name;
        this.tickt = tickt;
        alert(`${this.name} your ticket ${this.tickt} is booked `);
    }
    formCan(){
        alert("Your form is Cancelled");
    }
}
const student1 = new Student;
const student2 = new Student;

student1.formSub("Sameer kadyan", 24323);
student2.formCan();