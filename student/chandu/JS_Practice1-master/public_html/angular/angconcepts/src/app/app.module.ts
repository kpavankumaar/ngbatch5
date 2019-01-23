import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform/templatedrivenform.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';

import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    TemplatedrivenformComponent,
    ReactiveformsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
