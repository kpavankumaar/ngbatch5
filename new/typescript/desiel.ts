import { ExtendedEngine,Transmission } from './engine';
// interface Engine {
//     engineType: 'string'
// }
// interface Transmission {
//     clutch: 'string',
//     suspension: 'string'
// }

export class Desiel implements ExtendedEngine,Transmission {
    coolant;
    clutch;
    suspension;
    engineType;

    constructor(engine, clutch, suspension) {
        this.engineType = engine;    
        this.clutch = clutch;
        this.suspension = suspension;
    }

}

var desielVehicle = new Desiel('2cylinder','standard','telescopicshockabsorbers');
console.log(desielVehicle);

