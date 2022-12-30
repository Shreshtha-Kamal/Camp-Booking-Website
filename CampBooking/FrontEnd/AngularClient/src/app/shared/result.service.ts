import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
 obj:any ={};
  constructor() { }
  setData(data : any){
    this.obj = data;
  }
  getcamp(){
    return this.obj
  }
}
