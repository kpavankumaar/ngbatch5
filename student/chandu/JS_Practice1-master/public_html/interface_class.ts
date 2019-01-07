interface Engine{
    engineType: string,
    //Question mark is indicates that brand is optional
    brand?:string,
   
    details(engineType:string,brand:string):void,
}

let desielEngine:Engine = {
    engineType: 'deseil',
    brand:'fiat',
    details: (a,b) => {

    }
}
console.log(desielEngine);
let electricVehicle:Engine = {
    engineType: 'petrol',
    brand:'ford',
    details: (b,c) => {

    }
}
console.log(electricVehicle);

function run():number {
    return 10;
}

console.log(run());