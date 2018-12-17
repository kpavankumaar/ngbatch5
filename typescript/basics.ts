for(let i = 0 ; i < 10 ; i++){
    setTimeout(function(){
        console.log(i)
    },500)
    
}
const name_1 : string = 1;
let num_1: number;
num_1 = 4;
function sum_1(a:number = 30,b:number){
    console.log(a + b);
} 
sum_1(10,20);
console.log(name_1);
name_1 = '';
function employee(language){
    return function(name){
        console.log(name, 'knows ', language );
    }
}
let arr: number[];
arr = [10,20,30,[]];
let arr_1: Array<number| string | [] >
// arr_1 =[1,2,3,[],4, function(){}];
// arrow function
var test = (a,b):number => {
    console.log(this);
    return a + b;
};
var obj_1 = {
    keytext: (a,b) => {
        console.log(this);
    }
}

obj_1.keytext(1,2);
console.log(test(3,5));



