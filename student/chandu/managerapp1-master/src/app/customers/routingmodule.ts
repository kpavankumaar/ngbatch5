import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { NgModule } from '@angular/core';
import { CustomersCardComponent } from './customers-card.component';
import { CustomersGridComponent } from './customers-grid.component';

const customersRoute:Routes = [
    {path:'',component:CustomersComponent}
]

@NgModule({
    imports:[ RouterModule.forChild(customersRoute)],
    exports : [RouterModule]
})

export class CustomerRoutingModule{
    static components = [CustomersComponent,CustomersCardComponent,CustomersGridComponent]
}