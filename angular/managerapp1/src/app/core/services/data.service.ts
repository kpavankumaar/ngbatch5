import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomerI } from '../models/customersTypeDef';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'token': 'authToken'
  })
};
@Injectable()
export class DataService {
  loginLogoutFlag:boolean = false;
  constructor(private http:HttpClient) { }

  getSampleData(){
    return   ['krishna','arjuna']
  }
  getCustomersData():Observable<any>{
    var headers = new HttpHeaders();
    headers.append('accept','application/json');
  
    console.log('headers',headers);
    return this.http.get('/api/customers').pipe(
      map(res => res)
    )
  }
  getCustomerData(id: number): Observable<any> {
    return this.http.get(`/api/customers/${id}`).pipe(
      map(res => res)
    );
  }
  // api/states
  getStatesData(): Observable<any> {
    return this.http.get('/api/states');
  }
  // /api/auth/login
  login(loginDetails) {
    return this.http.post('/api/auth/login', loginDetails);
  }
  // insert Customer
  insertCustomer(customer) {
    return this.http.post('/api/customers', customer, httpOptions);
  }
  updateCustomer(customer) {
    return this.http.put(`/api/customers/${customer.id}`, customer, httpOptions);
  }
  deleteCustomerData(customer) {
    return this.http.delete(`/api/customers/${customer.id}`, httpOptions);
  }

}
