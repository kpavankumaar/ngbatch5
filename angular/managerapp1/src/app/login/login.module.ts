import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RoutingModule } from './routingmodule';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule, RoutingModule, ReactiveFormsModule
    
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
