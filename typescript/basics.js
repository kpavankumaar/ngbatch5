var _this = this;
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 500);
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
var name_1 = 1;
var num_1;
num_1 = 4;
function sum_1(a, b) {
    if (a === void 0) { a = 30; }
    console.log(a + b);
}
sum_1(10, 20);
console.log(name_1);
name_1 = '';
function employee(language) {
    return function (name) {
        console.log(name, 'knows ', language);
    };
}
var arr;
arr = [10, 20, 30, []];
var arr_1;
// arr_1 =[1,2,3,[],4, function(){}];
// arrow function
var test = function (a, b) {
    console.log(_this);
    return a + b;
};
var obj_1 = {
    keytext: (a,b)=>{
        console.log(this);
    }
}
obj_1.keytext(1,2);

console.log(test(3, 5));
