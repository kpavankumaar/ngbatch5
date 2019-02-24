function test(){
	var name;
	test1(function(data){
		console.log(data.name)
		name = data.name
	})
	console.log(name);
}

function test1(callback){
	callback({name:'pavankumar'});
}
test();