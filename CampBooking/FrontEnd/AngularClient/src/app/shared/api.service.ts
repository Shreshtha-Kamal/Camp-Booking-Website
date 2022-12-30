import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { BookingCamp } from "../booking-screen/BookingCamp.model";
@Injectable({

  providedIn: 'root'

})

export class ApiService {

  obj: any;

  constructor(private http: HttpClient) { }

  url = "https://localhost:44353/api/"

  postdetails(data: any) {

    return this.http.post(this.url + "Camp/Create", data, { responseType: 'text', });

  }
  deletedetails(data: any) {

    return this.http.post("https://localhost:44353/api/Camp/deletecamp", data);

  }


  postBooking(data: BookingCamp) {
    return this.http.post(this.url + "BookCamp/CreateBooking", data);
  }
  update(id: number, campObj: any) {
    return this.http.put<any>(`${this.url}Camp/updates/${id}`, campObj);
  }

  viewCamp() {

    this.obj = this.http.get<any>(`${this.url}Camp/GetAllCamps`);

    return this.obj;

  }
  viewbooking(id: number, bookcampobj: any) {
    this.obj = this.http.get<any>(`${this.url}BookCamp/getbookingbyid/${id}`, bookcampobj);
  }

  deletebooking(id: number) {
    return this.http.delete(`https://localhost:44353/api/BookCamp/DeleteBooking/${id}`)
  }

}