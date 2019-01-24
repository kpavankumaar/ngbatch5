import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersCardComponent } from './customers-card.component';
import { CustomersComponent } from './customers.component';
import { CustomersGridComponent } from './customers-grid.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomersComponent, CustomersCardComponent,  CustomersGridComponent],
  exports:[CustomersComponent],
})
export class CustomersModule { }