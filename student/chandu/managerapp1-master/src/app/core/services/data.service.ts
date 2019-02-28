import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getSampleData(){
    return ['krishna','arjuna'];
  }

  getCustomersData():Observable<any>{
    return this.http.get('/api/customers').pipe(map(res => res));

  }

  getCustomerData(id:number):Observable<any>{
    return this.http.get('/api/customers/${id}').pipe(map(res => res));
  }

  login(loginDetails){
    return this.http.post('/api/auth/login',loginDetails);
  }

}
