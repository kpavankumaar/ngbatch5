import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomerI } from '../models/customersTypeDef';
@Injectable()
export class DataService {
  loginLogoutFlag:boolean = false;
  constructor(private http:HttpClient) { }
  getSampleData(){
    return   ['krishna','arjuna']
  }
  getCustomersData():Observable<any>{
    return this.http.get('/api/customers').pipe(
      map(res => res)
    )
  }
  getCustomerData(id:number):Observable<any>{
    return this.http.get(`/api/customers/${id}`).pipe(
      map(res => res)
    )
  }
  // /api/auth/login
  login(loginDetails){
    return this.http.post('/api/auth/login',loginDetails);
  }
  


}
