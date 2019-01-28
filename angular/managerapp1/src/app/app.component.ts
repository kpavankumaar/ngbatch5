import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customersPageLoadFlag = true;
  ordersPageLoagFlag = false;
  choosePageLoad(data){
    
    if(data === 'customers'){
      this.customersPageLoadFlag = true;
      this.ordersPageLoagFlag = false;        
    }
    if(data === 'orders'){
      console.log('orders data', data);
      this.customersPageLoadFlag = false;
      this.ordersPageLoagFlag = true;
     
    }
  }
}
