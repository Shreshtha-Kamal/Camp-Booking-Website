import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  dummypass = 'admin';

  dummyemail = 'shreshtha.jaiswal@nagarro.com';
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  onLogin(event : any) {

    //this.router.navigate(['/admindashboard'])

    //console.log("Hello moto")

    event.preventDefault()

    const target = event.target

    const email = target.querySelector('#email').value

    const password = target.querySelector('#password').value

    if (password == this.dummypass && email == this.dummyemail) {

        localStorage.setItem('isLoggedIn', "true");

        localStorage.setItem('token', password.value);

        this.router.navigate(['/camppage'])

    }

    else {

        alert("Password Incorrect! Please Try Again..")

    }

}
}