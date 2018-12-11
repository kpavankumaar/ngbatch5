for(var i = 0 ; i < 10 ; i++){
    setTimeout(function(){
        console.log(i)
    },500)
    
}
function employee(language){
    return function(name){
        console.log(name, 'knows ', language );
    }
}
var empDetails = employee('javascript');
empDetails('ravi')
var num = 10;