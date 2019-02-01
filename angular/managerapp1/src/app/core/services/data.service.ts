import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
  getSampleData(){
    return   ['krishna','arjuna']
  }

}
