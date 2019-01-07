/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Bed(size, material) {
    this.bed_size = size;
    this.bed_material = material;
}

function Chair(type, shape, color, material) {
    this.chair_type = type;
    this.chair_shape = shape;
    this.chair_color = color;
    this.chair_material = material;
//    this.chair_orderDetails = function(){
//        console.log(this.chair_type,this.chair_shape,this.chair_color,this.chair_material);
//    }
}

Chair.chair_orderDetails = function () {
    console.log(this.chair_type, this.chair_shape, this.chair_color, this.chair_material);
}


function Table(type, shape, color, material) {
    this.table_type = type;
    this.table_shape = shape;
    this.table_color = color;
    this.table_material = material;
}

function Furniture(table, chair, bed, shoerack) {
    Table.apply(this, table);
    Chair.apply(this, chair);
    Bed.apply(this, bed);
    this.shoerack = shoerack;
}

Furniture.prototype = Object.create(Chair.prototype);
Furniture.prototype.totalOrderDetails = function () {
    console.log("all properties from chair,table,bed,shoerack");
}
Furniture.prototype.constructor = Furniture;
var tableArr = ['studyTable', 'rectanguler', 'black', 'wood'];
var chairArr = ['studyChair', 'not round', 'black', 'wood'];
var bedArr = ['king size', 'wood'];

var userOrder1 = new Furniture(tableArr, chairArr, bedArr, 'wallmart shoerack');

