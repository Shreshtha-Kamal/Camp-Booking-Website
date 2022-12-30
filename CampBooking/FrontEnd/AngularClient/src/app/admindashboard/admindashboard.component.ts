import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { campdata } from './campdata.model';

@Component({
selector: 'app-admin-dashboard',
templateUrl: './admindashboard.component.html',
styleUrls: ['./admindashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
newcamp : campdata = new campdata()
camp:any;
formValue !: FormGroup;
id!:number;
constructor(private formBuilder: FormBuilder,private api : ApiService ,private router:Router) { }

ngOnInit(): void {
this.formValue = this.formBuilder.group({
Id:['']   ,
campName: ['', Validators.required],
rate: ['', Validators.required],
capacity: ['', Validators.required],
description: ['', Validators.required],
image:['', Validators.required],
})
}

registercamp(){
this.newcamp.campName = this.formValue.value.campName;
this.newcamp.rate = this.formValue.value.rate;
this.newcamp.capacity = this.formValue.value.capacity;
this.newcamp.description = this.formValue.value.description;
this.newcamp.image = this.formValue.value.image;
this.api.postdetails(this.newcamp).subscribe(res =>{
console.log(res);
alert("Camp Added Successfully");

})
}}
