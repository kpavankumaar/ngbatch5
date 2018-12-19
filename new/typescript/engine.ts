export interface Engine{
    engineType:string
}
export interface Transmission{
    clutch:string,
    suspension: string
}
export interface ExtendedEngine extends Engine {
    coolant:string,


}