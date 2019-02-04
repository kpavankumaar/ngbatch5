import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-customers-card',
  templateUrl: './customers-card.component.html',
  styleUrls: ['./customers-card.component.css']
})
export class CustomersCardComponent implements OnInit,OnChanges {
  @Input() userData ;
  constructor() { }

  ngOnInit() {
  }
  
  ngOnChanges(){
    console.log('customers card component on change detection ')
  }
  clickEvent(){
    console.log('click event from card component');
  }
}
