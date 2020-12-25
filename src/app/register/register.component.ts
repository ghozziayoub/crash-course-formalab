import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient) {

    let registerFormControls = {
      firstame: new FormControl("", [
        Validators.required,
      ]),
      lastname: new FormControl("", [
        Validators.required,
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ]),
      repassword: new FormControl("", [
        Validators.required,
      ])
    }

    this.registerForm = formBuilder.group(registerFormControls)

  }

  get firstame() { return this.registerForm.get('firstame') }
  get lastname() { return this.registerForm.get('lastname') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  get repassword() { return this.registerForm.get('repassword') }

  ngOnInit(): void {
    let token = localStorage.getItem("mytoken")

    if (token) {
      this.router.navigateByUrl('/dashboard')
    }
  }

  registerUser() {
    console.log(this.registerForm.value)

    let data = this.registerForm.value

    this.http.post<any>("https://itbs-backend.herokuapp.com/user/register", data)
      .subscribe(
        (result) => {
          console.log(result);
          this.router.navigateByUrl('/login')
        },
        (error) => { console.log(error) }
      )
  }
}
