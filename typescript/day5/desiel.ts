import { EngineInfo } from './engine';

class Desiel extends EngineInfo.Engine{
    details(){
        console.log(this.engine)
    }
}
var desielEngine = new Desiel('1500cc');
console.log(desielEngine);