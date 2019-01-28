import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersCardComponent } from './customers/customers-card.component';
import { CustomersGridComponent } from './customers/customers-grid.component';
import { NgModule } from '@angular/core';
const route:Routes =[
    {path:'customers',loadChildren :'./customers/customers.module#CustomerModule'},
    {path:'orders',loadChildren:'./orders/orders.module#OrdersModule'},
]

@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule]
})

export class RoutingModule{

}