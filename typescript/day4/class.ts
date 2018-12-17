class PetrolEngine{
    engine:string;
    detailsOfEngine(){
    }
    constructor(size?){
        this.engine = size;
    }
}
let car = new PetrolEngine('1200cc');
let bike = new PetrolEngine();
// function test(){}