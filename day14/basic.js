(function(win){
	var obj = {};
	obj.a = 20 ;
	obj.b = 30;
	console.log(obj.a)
	win.c = obj.a + obj.b
})(window);

