function sum(a, b) {
    console.log(a + b);
}
sum(10, 20);
function sum1(a, b) {
    if (a === void 0) { a = 10; }
    if (b === void 0) { b = 30; }
    console.log(a + b);
}
sum1();
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 500);
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
var name_1 = 'chandu';
var num = 10;
var arr;
arr = [1, 2, 3, 4];
var arr1;
arr1 = [1, 2, 3, [], 'chandu'];
