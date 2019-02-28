import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RoutingModule } from '../customer/routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,RoutingModule,ReactiveFormsModule
  ]
})
export class LoginModule {
  constructor(){
    console.log('came to Login mmodule');
  }
 }
