import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../service/http-provider.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  editCategoryForm: categoryForm = new categoryForm();

  @ViewChild("categoryForm")
  categoryForm!: NgForm;

  isSubmitted: boolean = false;
  categoryId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.params['categoryId'];
    this.getCategoryDetailById();
  }

  getCategoryDetailById() {
    this.httpProvider.getCategoryDetailById(this.categoryId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editCategoryForm.id = resultData.id;
          this.editCategoryForm.nome = resultData.nome;
          this.editCategoryForm.descricao = resultData.descricao;
          this.editCategoryForm.indAtiva = resultData.indAtiva;
        }
      }
    },
      (error: any) => { });
  }

  EditCategory(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveCategory(this.editCategoryForm).subscribe(async data => {
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

export class categoryForm {
  id: number = 0;
  nome: string = "";
  descricao: string = "";
  indAtiva: string = "";
}
