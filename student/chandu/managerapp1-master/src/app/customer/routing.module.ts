import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerEditComponent } from './customer-edit.component';
import { CustomerOrdersComponent } from './customer-orders.component';
import { Routes,RouterModule } from '@angular/router';

const route:Routes=[
  {
    path:'',component:CustomerComponent,
    children:[
      {path:'details',component:CustomerDetailsComponent},
      {path:'edit',component:CustomerEditComponent},
      {path:'orders',component:CustomerOrdersComponent}
    ]
  },
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(route)
  ],
  exports:[RouterModule]
})
export class RoutingModule {
      static components = [CustomerComponent,CustomerDetailsComponent,CustomerEditComponent,CustomerOrdersComponent];
 }
