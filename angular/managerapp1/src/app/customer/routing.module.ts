import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerEditComponent } from './customer-edit.component';
import { CustomerOrdersComponent } from './customer-orders.component';
import { CustomerComponent } from './customer.component';
import { CanActivateGaurd } from './can-activate.gaurd';
import { CanDeactivateGaurd } from './can-deactivate.gaurd';

const route:Routes =[
  { path:'',
    component:CustomerComponent,
    children: [
      {path:'details',component:CustomerDetailsComponent},
      {path:'orders',component:CustomerOrdersComponent},
      {path:'edit',
      component:CustomerEditComponent,
      canActivate:[CanActivateGaurd],
      canDeactivate:[CanDeactivateGaurd]
      }
    ]
  },
  
]
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports:[RouterModule],
  providers:[CanActivateGaurd]
})
export class RoutingModule {
  static component = [CustomerComponent,CustomerDetailsComponent,CustomerEditComponent,CustomerOrdersComponent]
 }
