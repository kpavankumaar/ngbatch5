import { Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersCardComponent } from './customers/customers-card.component';
import { CustomersGridComponent } from './customers/customers-grid.component';
export const route:Routes =[
    {path:'customers',
    component:CustomersComponent,
    children:[
        {path:'card',component:CustomersCardComponent},
        {path:'list',component:CustomersGridComponent}
        ]
    },
    {path:'orders',component:OrdersComponent},
]
