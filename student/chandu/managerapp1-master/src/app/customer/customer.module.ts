import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerComponent } from './customer.component';
import { CustomerEditComponent } from './customer-edit.component';
import { CustomerOrdersComponent } from './customer-orders.component';
import { RoutingModule } from './routing.module';

@NgModule({
  imports: [
    CommonModule,RoutingModule
  ],
  declarations: [CustomerComponent,CustomerDetailsComponent,CustomerEditComponent,CustomerOrdersComponent],
  
})
export class CustomerModule { }
