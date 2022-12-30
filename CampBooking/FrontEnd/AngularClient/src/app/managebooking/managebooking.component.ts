import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { ResultService } from '../shared/result.service';

@Component({
  selector: 'app-managebooking',
  templateUrl: './managebooking.component.html',
  styleUrls: ['./managebooking.component.css']
})
export class ManagebookingComponent implements OnInit {
  formValue !: FormGroup;
  permit: boolean = false
  view= new FormGroup({
    referencenumber: new FormControl('',Validators.required),
  })
  constructor(private router:Router,private formBuilder: FormBuilder,private http:HttpClient,private service : ResultService) { }
  ngOnInit(): void {
    this.view = this.formBuilder.group({
      referencenumber : ['',Validators.required],
    })
  }

  referncenumber:any;
  cellphone:any;
  billaddress:any;
  country:any;
  state:any;
  zipcode:any;
  totalstay:any;
  totalamount:any;
  confirmationamount:any;
  BookedCampId:any;

  searchRefNum(){

    //this.router.navigate(['/confirmationscreen']);

    //console.log("ok");



    this.http.get( `https://localhost:44353/api/bookcamp/booking/camp/${this.view.value.referencenumber}`

    ).subscribe((res:any)=>{

    console.log(res);

    // const user = res.viewbooking((a:any)=>{

    //   return a.referencenumber === this.view.value.referencenumber

    // });

    //  console.warn(user);

        if(res){

          this.permit=true

          alert("search successful");

          this.router.navigate(['\confirmationscreen']);

          this.service.setData(res);

          this.view.reset();

        }else{

          alert("booking not found");

        }

      }

    )

  }

}




//     showCamp()
//      {
//       this.api.viewCamp().subscribe((res: any) => {
//         this['camp'] = res;
//       })
//   }   
//   this.api.showCamp();
//   this.api.searchRefNum();
// }
// }


  

// function showCamp() {
//   throw new Error('Function not implemented.');
// }

