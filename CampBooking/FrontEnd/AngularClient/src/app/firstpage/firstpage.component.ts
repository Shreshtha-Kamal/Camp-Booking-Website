import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
 camp:any=[]

 p:any;
 tableSize:number=4;
 formValue!:FormGroup;
  constructor(private http:HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formValue =  this.formBuilder.group({

      checkin: ['', Validators.required],

      checkout: ['', Validators.required],

      capacity: ['',Validators.required],

    })
    this.getCampdetails();
    
  }
  
  getCampdetails()
  {
  this.http.get("https://localhost:44353/api/Camp/GetAllCamps").subscribe(res=>{this.camp = res;})
  }
  filterSearch(){
    var passSearchData={
      "checkInDate":this.formValue.value.checkin,
      "checkOutDate":this.formValue.value.checkout
    };
    
    console.log(passSearchData)
    this.http.post("https://localhost:44353/api/Camp/GetFilteredCamps",passSearchData).subscribe((res:any)=>{
      console.log(res);
      this.camp=res;
      var tempData:any=[];
      var reqCapacity=this.formValue.value.capacity;
      this.camp.forEach((element:any) => {
      if(element.capacity>=reqCapacity){
        tempData.push(element);
      }
      
    });
    this.camp=tempData;
    console.log(this.camp);
    })
    
    
    
  }

  // onTableSizeChnage(event:any):void{
  //   this.tableSize=event.target.value;
  //   this.p=1;
  //   this.filterSearch();
    
  // }

}


