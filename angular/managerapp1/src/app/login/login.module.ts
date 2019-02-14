import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RoutingModule } from './routingmodule';

@NgModule({
  imports: [
    CommonModule, RoutingModule
    
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
