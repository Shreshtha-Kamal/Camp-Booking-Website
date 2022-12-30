import { ApiService } from './../shared/api.service';
import { BookingCamp } from './BookingCamp.model';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ResultService } from '../shared/result.service';
import { ActivatedRoute } from '@angular/router';
import { Helper } from '../shared/helper';

@Component({
  selector: 'app-booking-screen',
  templateUrl: './booking-screen.component.html',
  styleUrls: ['./booking-screen.component.css']
})
export class BookingScreenComponent implements OnInit {

  camp:any=[];
  id:any=[];
  formValue !: FormGroup
  data: any = [];
  t:string = '';
  t_am:string='';
  bookingcamp: BookingCamp = new BookingCamp();
  todays_date=new Helper().Today();
  tomorrows_date=new Helper().Tomorrow();
  
 
  constructor(private http : HttpClient,private api:ApiService,private formBuilder:FormBuilder,private service:ResultService, private route:ActivatedRoute) { 
      this.formValue = new FormGroup({
      billaddress: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required]),
      cellphone: new FormControl('', [Validators.required]),
      checkInDate:new FormControl('', [Validators.required]),
      checkOutDate:new FormControl('', [Validators.required]),
      

    
  })
}



  ngOnInit(): void {
    this.formValue =  this.formBuilder.group({
      billaddress: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zipcode: ['', Validators.required],
      cellphone:['', Validators.required],
      checkInDate:['', Validators.required],
      checkOutDate:['', Validators.required]
    })
    

    this.data = this.service.getcamp();
    this.route.params.subscribe(params=>{
      this.id=params['id'];
    })

    this.getCampById();
  }



  getCampById()
  {
  this.http.get(`https://localhost:44353/api/Camp/getCamp/${this.id}`).subscribe((res:any)=>{this.camp = res;})
  console.log(this.camp);
  }

  GetDiffDays(sDate: string, eDate: string): number {

    var startDate = new Date(sDate);

    var endDate = new Date(eDate);



    var Time = endDate.getTime() - startDate.getTime();

    return Time / (1000 * 3600 * 24);

  }

  booking()
  {
    let x = Math.floor((Math.random() * 100000000) + 1);
    this.t = x.toString();
    let r=this.camp.rate;
    let no_Of_Days=this.GetDiffDays(this.formValue.value.checkInDate, this.formValue.value.checkOutDate);
    // let amount=r*no_Of_Days;
    // this.t_am=amount.toString();
    let campId=this.id.toString();
     
    this.bookingcamp.cellphone= this.formValue.value.cellphone.toString();
    this.bookingcamp.billaddress = this.formValue.value.billaddress;
    this.bookingcamp.state = this.formValue.value.state;
    this.bookingcamp.country = this.formValue.value.country;
    this.bookingcamp.zipcode = this.formValue.value.zipcode.toString();
    this.bookingcamp.referenceId = this.t;
    this.bookingcamp.totalStay=no_Of_Days.toString();
    this.bookingcamp.totalAmount=this.t_am;
    this.bookingcamp.checkInDate = this.formValue.value.checkInDate;
    this.bookingcamp.checkOutDate=this.formValue.value.checkOutDate;
    this.bookingcamp.bookedCampId=campId;
    console.log(this.bookingcamp);
    this.api.postBooking(this.bookingcamp).subscribe(res =>{
      if (res==false) {
        alert("The Booking request is Invalid \n Date Clash Occurs");
        this.formValue.reset();
      }
      else{
        alert(`Booking Successfull and your Booking Reference ID is: ${this.t}`);
        this.formValue.reset();
      }
      
      
    })
  }

  check()
  {
    if(this.formValue.value.checkInDate > this.formValue.value.checkOutDate)
    {
      alert("Invalid checkout date");
    }
    else{
    let r=this.camp.rate;
    let no_Of_Days=this.GetDiffDays(this.formValue.value.checkInDate, this.formValue.value.checkOutDate);
    let amount=r*no_Of_Days;
    if(no_Of_Days==3){
      amount=(amount-1000);
      alert("You've a Coupon DISC1000 applied with additional coupon discount of Rs.1000");
    }
    else if(no_Of_Days==5)
    {
      amount=(amount-1500);
      alert("You've a Coupon DISC1500 applied with additional coupon discount of Rs.1500");
    }
    
    this.t_am=amount.toString()
    this.bookingcamp.totalStay=no_Of_Days.toString();
    this.bookingcamp.totalAmount=this.t_am;
    }
  }

}
