import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customers-card',
  templateUrl: './customers-card.component.html',
  styleUrls: ['./customers-card.component.css']
})
export class CustomersCardComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
      // console.log('data in card view',this.datatochild)
  }

}
