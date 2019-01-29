import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './routingmodule';

@NgModule({
  imports: [
    CommonModule,CustomersRoutingModule
  ],
  declarations: [CustomersRoutingModule.components]
})
export class CustomersModule {
  constructor(){
    console.log('customers module');
  }
 }
