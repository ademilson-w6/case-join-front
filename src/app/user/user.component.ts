import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../service/http-provider.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUserForm: userForm = new userForm();

  @ViewChild("userForm")
  userForm!: NgForm;

  isSubmitted: boolean = false;

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  AddUser(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.signup(this.addUserForm).subscribe(async data => {
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

export class userForm {
  nome: string = "";
  email: string = "";
  senha: string = "";
}
