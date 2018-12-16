import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms'
import { emailMatcher } from '../customValidation/emailMatcher'
import { LoginServiceService } from '../Services/login-service.service'
import swal from 'sweetalert'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  pmsloginform: FormGroup;
  pmsRegisterForm: FormGroup;

  constructor(private router: Router,
    private _fb: FormBuilder,
    private _loginservice: LoginServiceService) {

  }

  login(user) {
    if (this.pmsloginform.valid) {
      this.router.navigate(['/dashboard']);
      this._loginservice.Login(user).subscribe((response: any) => {
        var auth = response.AuthToken;
        debugger;
        sessionStorage.setItem("AuthorizationToken", auth);
        this.router.navigate(['/dashboard']);
      })
    } else {
      swal("Good job!", "You clicked the button!", "warn");
    }
  }

  loginWithFacebook() {
  }

  loginWithgoogle() {

  }

  signup(email, password) {
  }

  logout() {
  }

  ngOnInit() {
    this.pmsloginform = this._fb.group({
      LoginId: [null, [Validators.required]],
      Password: [null, [Validators.required]]
    })


    this.pmsRegisterForm = this._fb.group({
      userid: [null, [Validators.required]],
      name: [null, [Validators.required]],
      lname: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      dob: [null, [Validators.required]],
      mobileno: [null, [Validators.required, Validators.maxLength(10)]],
      email: [null, [Validators.required]],
      confirmEmail: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmpassword: [null, [Validators.required]]
    }, { validator: emailMatcher })
  }

  onSubmit() {

  }

  SaveTask(value) {

  }

  clear() { }

  loginWithApiService() {

  }
}
