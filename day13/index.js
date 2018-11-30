function Bed(size,material){
	this.bed_size = size;
	this.bed_material = material;
}
function Chair(type,shape,color,material){
	this.chair_type = type;
	this.chair_shape = shape;
	this.chair_color = color;
	this.chair_material = material;
	// this.chair_orderDetails = function(){
	// 	console.log(this.chair_type, this.chair_shape,this.chair_color,this.chair_material);
	// }
}
Chair.prototype.chair_orderDetails = function(){
		console.log(this.chair_type, this.chair_shape,this.chair_color,this.chair_material);
	}
function Table(type,shape,color,material){
	this.table_type = type;
	this.table_shape = shape;
	this.table_color = color;
	this.table_material = material;
}
function Furniture(table,chair,bed,shoerack){
	Table.apply(this,table)
	Chair.apply(this,chair);
	Bed.apply(this,bed);
	this.shoerack = shoerack;
}

Furniture.prototype = Object.create(Chair.prototype);
Furniture.prototype.totalOrderDetails = function(){
	console.log('all properties from chair , table, bed, shoerack');
}
Furniture.prototype.constructor = Furniture;
var tableArr = ['studytable','rectangular','white','wood']
var chairArr = ['studychair','not round','dark','metal'];
var bedArr = ['king size','wood'];
let userOrder1 = new Furniture(tableArr,chairArr,bedArr,'wallmounted shoerack')
let userOrder2 = new Furniture(['dinningTable','4*2','dark choclate','wood'],['rollingChair'])
userOrder2.chair_orderDetails = function(){
	console.log(this.chair_type);
}





