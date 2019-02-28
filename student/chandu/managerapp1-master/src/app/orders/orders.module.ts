import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './routingmodule';

@NgModule({
  declarations: [OrdersRoutingModule.components],
  imports: [
    CommonModule,OrdersRoutingModule
  ]
})
export class OrdersModule { 
  constructor(){
    console.log('orders module');
  }
}
