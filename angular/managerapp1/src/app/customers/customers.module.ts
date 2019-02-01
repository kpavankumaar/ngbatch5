import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './routingmodule';
import { DataService } from '../core/services/data.service';

@NgModule({
  imports: [
    CommonModule,CustomersRoutingModule
  ],
  declarations: [CustomersRoutingModule.components]
})
export class CustomersModule {
  
  constructor() {
    console.log('CustomersModule')
    // console.log(dataService.getSampleData());
   }
 }
