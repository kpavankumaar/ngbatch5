import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';

import { CoreModule } from './core/core.module';
import { OrdersModule } from './orders/orders.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CoreModule, CustomersModule, OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
