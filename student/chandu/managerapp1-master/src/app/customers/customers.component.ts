import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [ DataService ]
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
  data;
  constructor(private dataService: DataService) { 

  }

  ngOnInit() {
    this.dataService.getCustomersData().subscribe(
        res => {
          console.log(res);
          this.data = res;
        })
  }

  ngOnChanges(){
    console.log('customers component on change detection');
  }


}
