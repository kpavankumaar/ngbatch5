import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
const route:Routes =[
    {path:'', redirectTo:'/customers',pathMatch:'full'},
    {path:'customers/:id',loadChildren :'./customer/customer.module#CustomerModule'},
    {path:'customers',loadChildren :'./customers/customers.module#CustomersModule'},
    {path:'orders',loadChildren:'./orders/orders.module#OrdersModule'},
    
]

@NgModule({
    imports:[RouterModule.forRoot(route,{preloadingStrategy:PreloadAllModules, enableTracing: true })],
    exports:[RouterModule]
})

export class AppRoutingModule{

}