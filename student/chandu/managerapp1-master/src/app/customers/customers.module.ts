import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './routingmodule';
import { DataService } from '../core/services/data.service';

@NgModule({
  imports: [ CommonModule,CustomerRoutingModule ],
  declarations: [CustomerRoutingModule.components],
})
export class CustomersModule {
  constructor(){
    console.log('customers module');
    //console.log(dataService.g);
  }
 }
