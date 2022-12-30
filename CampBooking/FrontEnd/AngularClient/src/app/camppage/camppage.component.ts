import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router, RouterConfigOptions } from '@angular/router';
import { AuthService } from '../auth.service';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-camppage',
  templateUrl: './camppage.component.html',
  styleUrls: ['./camppage.component.css']
})
export class CamppageComponent implements OnInit {
  camp: any;
  p: any;
  formValue!: FormGroup;
  id!: number;
  constructor(private http: HttpClient, private api: ApiService, private formbuilder: FormBuilder, private route: Router, private authservice:AuthService) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({

      campName: ['', Validators.required],

      rate: ['', Validators.required],

      capacity: ['', Validators.required],

      description: ['', Validators.required],

      image: ['', Validators.required]

    })
    // this.getCampdetails()
    this.showCamp();


  }
  getCampdetails() {
    this.http.get("https://localhost:44353/api/Camp/GetAllCamps").subscribe(res => { this.camp = res; })
  }
  showCamp() {



    this.api.viewCamp().subscribe((res: any) => {



      this.camp = res;



    })
  }
  deleteCamp(i : any)
  {   var result=confirm("Do you want to delete it?");
  if(result==true){
    this.api.deletedetails(i).subscribe(res=>{

      this.getCampdetails();
    })
  }
  }
  editcamp(row: any) {

    this.formValue.controls['campName'].setValue(row.campName)



    this.formValue.controls['rate'].setValue(row.rate)



    this.formValue.controls['capacity'].setValue(row.capacity)



    this.formValue.controls['description'].setValue(row.description)



    this.formValue.controls['image'].setValue(row.image)

    this.id = row.id

    console.log(row)

    console.log(this.id)





  }

  updatecamp() {

    console.log(this.formValue.value)

    // console.log(this.id)





    this.api.update(this.id, this.formValue.value).subscribe((res: any) => {

      console.log(res)

      alert("updated successfully")

      this.showCamp()

      this.route.navigate(['/camppage'])

    })
  }



  logout(){
    this.authservice.logout();
    this.route.navigate(['/adminlogin'])
  }




}









