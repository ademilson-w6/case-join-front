import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../service/http-provider.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addProductForm: productForm = new productForm();

  @ViewChild("productForm")
  productForm!: NgForm;

  isSubmitted: boolean = false;

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  AddProduct(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveProduct(this.addProductForm).subscribe(async data => {
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

export class productForm {
  sku: string = "";
  nome: string = "";
  descricao: string = "";
  valorUnitario: string = "";
}
