import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor() { }
  printmeg(){
    console.log("welcome to service class");
  }
}
