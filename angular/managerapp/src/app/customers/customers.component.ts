import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, OnChanges {
  dataFromParent = [1,2,3,4];
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    console.log('customers component on change detection ')
  }

}
