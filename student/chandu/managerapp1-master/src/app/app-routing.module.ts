import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  // {path:'customers',loadChildren:'./customers/customers.module#CustomersModule'},
  // {path:'orders',loadChildren:'./orders/orders.module#OrdersModule'}

  {path:'',redirectTo:'/customers',pathMatch:'full'},
  {path:'customers/:id',loadChildren:'./customer/customer.module#CustomerModule'},
  {path:'customers',loadChildren:'./customers/customers.module#CustomersModule'},
  {path:'orders',loadChildren:'./orders/orders.module#OrdersModule'},
  {path:'login',loadChildren:'./login/login.module#LoginModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
