import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerComponent } from './customer.component';
import { CustomerEditComponent } from './customer-edit.component';
import { CustomerOrdersComponent } from './customer-orders.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [CustomerComponent,CustomerDetailsComponent,CustomerEditComponent,CustomerOrdersComponent],
  imports: [
    CommonModule,RoutingModule
  ]
})
export class CustomerModule { }
