import { Component, OnInit, OnChanges,Input } from '@angular/core';

@Component({
  selector: 'app-customers-card',
  templateUrl: './customers-card.component.html',
  styleUrls: ['./customers-card.component.css']
})
export class CustomersCardComponent implements OnInit {
  //From parent component to child communicaation @Input is used
  @Input() userData;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log('customers component detection is find ',this.userData);
  }

  clickEvent(){
    console.log('click event from card component');
  }
}
