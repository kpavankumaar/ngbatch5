import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-customers-card',
  templateUrl: './customers-card.component.html',
  styleUrls: ['./customers-card.component.css']
})
export class CustomersCardComponent implements OnInit,OnChanges{
  
  constructor() { }

  ngOnInit() {
      // console.log('data in card view',this.datatochild)
  }

  ngOnChanges(){
    console.log('customers card component on change detection ')
  }
}
