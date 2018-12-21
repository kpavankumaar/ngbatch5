export namespace EngineInfo{
    export class Engine {
        // engineType;
    
        constructor(protected engine) {
            // this.engineType = engine;
        }
        static test(){
            console.log(this.engine);
        }
    }
}

EngineInfo.Engine.test();