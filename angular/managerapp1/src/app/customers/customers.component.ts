import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers:[DataService]
})
export class CustomersComponent implements OnInit {
  cardStatus:boolean;
  listStatus:boolean;
  pageLoad(choosePage:string){
    if(choosePage === 'card'){
      this.cardStatus = true;
      this.listStatus = false;
    }else if(choosePage === 'list'){
      this.cardStatus = false;
      this.listStatus = true;
    }
  }
  
  constructor(private dataService: DataService) {
    console.log(dataService.getSampleData());
   }

  ngOnInit() {
  }
  
}
