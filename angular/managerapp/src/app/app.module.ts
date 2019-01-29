import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';

import { CoreModule } from './core/core.module';
import { OrdersModule } from './orders/orders.module';
import { RouterModule } from '@angular/router';
import { route } from './route';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(route), 
    CoreModule, 
    CustomersModule, 
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
