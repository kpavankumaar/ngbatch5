import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CustomerI } from '../models/customersTypeDef';
import { Observable } from 'rxjs';
@Injectable()
export class DataService {
//  private _url:string = "/assets/customers1.json" ;
  private _url = '/api/customers';
  constructor(private http:HttpClient) { }
  getCustomersData(): Observable<CustomerI[]> {
  return this.http.get<CustomerI[]>(this._url);
  }
  getCustomerData(id: number): Observable<any> {
    // console.log( "id", id);/api/customers/:id
    // return this.http.get('/assets/customers1.json')
    return this.http.get(this._url);

  }
}
