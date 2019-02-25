import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,RoutingModule, FormsModule
  ],
  declarations: [ RoutingModule.component ],
  
})
export class CustomerModule { }
