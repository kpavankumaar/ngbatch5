import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersCardComponent } from './customers-card.component';
import { CustomersComponent } from './customers.component';
import { CustomersGridComponent } from './customers-grid.component';
import { RouterModule } from '@angular/router';
// import { customersRoute } from './customersroute';
@NgModule({
  imports: [
    CommonModule,RouterModule// RouterModule.forChild(customersRoute)
  ],
  declarations: [CustomersComponent, CustomersCardComponent,  CustomersGridComponent],
  exports:[CustomersComponent],
})
export class CustomersModule { }
