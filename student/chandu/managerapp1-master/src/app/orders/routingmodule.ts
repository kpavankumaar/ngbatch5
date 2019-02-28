import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { NgModule } from '@angular/core';

const ordersRoute : Routes= [
    {path:'',component:OrdersComponent}
]

@NgModule({
    imports:[RouterModule.forChild(ordersRoute)],
    exports:[RouterModule]
})

export class OrdersRoutingModule{
    static components = [ OrdersComponent ]
}