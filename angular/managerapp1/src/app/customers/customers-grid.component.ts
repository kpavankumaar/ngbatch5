import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-grid',
  templateUrl: './customers-grid.component.html',
  styleUrls: ['./customers-grid.component.css']
})
export class CustomersGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    console.log('customers grid component on change detection ')
  }
}
