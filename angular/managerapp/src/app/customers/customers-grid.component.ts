import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-customers-grid',
  templateUrl: './customers-grid.component.html',
  styleUrls: ['./customers-grid.component.css']
})
export class CustomersGridComponent implements OnInit,OnChanges {

  constructor() { }

  ngOnInit() {
  }
  runTheCode(){
    console.log('click event triggered')
  }
  ngOnChanges(){
    console.log('customers grid component on change detection ')
  }

}
