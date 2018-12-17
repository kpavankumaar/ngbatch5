import { Engine } from './engine';

class Desiel extends Engine{
    details(){
        console.log(this.engine)
    }
}
var desielEngine = new Desiel('1500cc');
console.log(desielEngine);