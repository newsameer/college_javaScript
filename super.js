class Animal {
    constructor(name, vajan){
        this.name = name;
        this.vajan = vajan
    }

    weight(name, vajan){
        console.log(`${name} is weight is ${vajan}`);
    }

    speak(){
        console.log("Nothing");
    }
}
class Dog extends Animal {
    weight(name, vajan){
        super.weight("kutta", 25);
    }
}
const animal = new Dog();
animal.weight();
animal.speak();