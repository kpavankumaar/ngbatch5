interface Engine{
    enginetype: string,
    brand?: string,
    // [index:string]:any
    details(engintype:string,brand: string):void,

}

let desielEngine:Engine = {
    enginetype:'deseil',
    brand:'fiat',
    details: (a,b) => {
    }

}
desielEngine.details(10,'');

let electricVehicle:Engine = {
    enginetype:'acmotors',
}

// electricVehicle.type = 10;
function run(arg:number):number{
    return arg;
}
function identity<T>(arg:T):T{
    return arg;
}

