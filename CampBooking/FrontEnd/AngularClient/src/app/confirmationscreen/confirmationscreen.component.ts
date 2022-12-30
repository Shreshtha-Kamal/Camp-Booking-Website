import { Component, OnInit } from '@angular/core';
import { ResultService } from '../shared/result.service';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-confirmationscreen',
  templateUrl: './confirmationscreen.component.html',
  styleUrls: ['./confirmationscreen.component.css']
})
export class ConfirmationscreenComponent implements OnInit {
  data: any = [];
  todaysDate:any;
  bookingCheckoutDate:any;
  bookingCampRating:any;

  constructor(private service : ResultService, private apiService:ApiService, private route:Router) { }

  ngOnInit(): void {
    this.data = this.service.getcamp();

  }

  isBookingPassed():any{
    this.todaysDate=new Date();
    this.bookingCheckoutDate=new Date(this.data.checkOutDate);
    if(this.todaysDate>this.bookingCheckoutDate){
      return true;
    }
  }
  // if(todaysDate.getTime()>bookingCheckoutDate.getTime()){
    
  // }


  

  deleteBooking(){
    this.apiService.deletebooking(this.data.referenceId).subscribe((res:any)=>{
      alert("Delete Successfully")
      this.route.navigate(["/managebooking"])
    })
  }

  onclick(rating:number){
    this.bookingCampRating=rating;
  }
  submitRating(){
    alert("Rating is Submitted Successfully...");
  }

}
