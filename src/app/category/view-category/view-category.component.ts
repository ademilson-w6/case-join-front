import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../../service/http-provider.service';
import { WebApiService } from '../../service/web-api.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent implements OnInit {

  categoryId: any;
  categoryDetail : any= [];

  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.params['categoryId'];
    this.getCategoryDetailById();
  }

  getCategoryDetailById() {
    this.httpProvider.getCategoryDetailById(this.categoryId).subscribe((data : any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.categoryDetail = resultData;
        }
      }
    },
    (error :any)=> { });
  }

}
