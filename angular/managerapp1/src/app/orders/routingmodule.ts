import { Routes, RouterModule  } from '@angular/router';
import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders.component';

const ordersRoute:Routes = [
     {path:'',component:OrdersComponent}
]

@NgModule({
    imports:[RouterModule.forChild(ordersRoute)],
    exports:[RouterModule]
})
export class OrdersRoutingModule{
    static components =[OrdersComponent]

}