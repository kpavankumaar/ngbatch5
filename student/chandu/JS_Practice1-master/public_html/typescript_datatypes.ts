function sum(a,b){
    console.log(a+b);
}

sum(10,20);

function sum1(a: number =10,b:number=30){
    console.log(a+b);
}
sum1();

for(let i = 0;i<10;i++){
        setTimeout(function(){
            console.log(i);
        },500)
}

const name_1 : string ='chandu';

let num: number = 10;

let arr: number[];
arr = [1,2,3,4]

let arr1: Array<number|string|[]>

arr1 = [1,2,3,[],'chandu'];

