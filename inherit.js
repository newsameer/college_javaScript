class Boys {
    constructor (type){
        this.type = type;
    }
    sportBoys (){
        console.log(this.type);
    } 
}
class Cricket extends Boys {
    cricketBoys (type) {
        console.log(`${this.type} is plays criket`)
    }
}
const boys = new Boys("All Sports");
boys.sportBoys();
const boys1 = new Cricket("Sameer kadyan");
boys1.cricketBoys();