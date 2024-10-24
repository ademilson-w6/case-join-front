import {Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {HttpProviderService} from "../service/http-provider.service";

interface LoginForm {
  email: FormControl,
  senha: FormControl
}

@Component({
  selector: 'app-add-category',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  addLoginForm: loginForm = new loginForm();

  @ViewChild("loginForm")
  loginForm!: NgForm;

  isSubmitted: boolean = false;

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  Login(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.login(this.addLoginForm).subscribe(async data => {
          if (data != null && data.body != null) {
            if (data != null && data.body != null) {
              var resultData = data.body;
              if (resultData != null && resultData.isSuccess) {
                this.toastr.success(resultData.message);
                setTimeout(() => {
                  this.router.navigate(['/Home']);
                }, 500);
              }
            }
          }
        },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/Home']);
          }, 500);
        });
    }
  }

}

export class loginForm {
  email: string = "";
  senha: string = "";
}
