"use strict";
exports.__esModule = true;
// interface Engine {
//     engineType: 'string'
// }
// interface Transmission {
//     clutch: 'string',
//     suspension: 'string'
// }
var Desiel = /** @class */ (function () {
    function Desiel(engine, clutch, suspension) {
        this.engineType = engine;
        this.clutch = clutch;
        this.suspension = suspension;
    }
    return Desiel;
}());
var desielVehicle = new Desiel('2cylinder', 'standard', 'telescopicshockabsorbers');
console.log(desielVehicle);
