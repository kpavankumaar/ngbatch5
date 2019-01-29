import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './routingmodule';

@NgModule({
  imports: [
    CommonModule,OrdersRoutingModule
  ],
  declarations: [OrdersRoutingModule.components],
  
})
export class OrdersModule { 
  constructor(){
    console.log('orders module');
  }
 }
