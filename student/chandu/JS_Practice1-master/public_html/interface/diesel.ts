//import {Engine} from "./engine";
import {EngineInfo} from "./engine";
class Diesel extends EngineInfo.Engine{
    // details(){
    //     console.log(this.engine);
    // }
}
var dieselEngine = new Diesel("1500cc");
console.log(dieselEngine);
