import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class DataService {

  constructor(private http:HttpClient) { }
  getSampleData(){
    return   ['krishna','arjuna']
  }
  getCustomersData(){
    return this.http.get('/api/customers').pipe(
      map(res => res)
    )
  }
  

}
