import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../service/http-provider.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  editProductForm: productForm = new productForm();

  @ViewChild("productForm")
  productForm!: NgForm;

  isSubmitted: boolean = false;
  productId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];
    this.getProductDetailById();
  }

  getProductDetailById() {
    this.httpProvider.getProductDetailById(this.productId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editProductForm.id = resultData.id;
          this.editProductForm.nome = resultData.nome;
          this.editProductForm.descricao = resultData.descricao;
          this.editProductForm.valorUnitario = resultData.valorUnitario;
        }
      }
    },
      (error: any) => { });
  }

  EditProduct(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveProduct(this.editProductForm).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
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
  id: number = 0;
  sku: string = "";
  nome: string = "";
  descricao: string = "";
  valorUnitario: string = "";
}
