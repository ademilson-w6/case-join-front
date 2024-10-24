import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../../service/http-provider.service';
import { WebApiService } from '../../service/web-api.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  productId: any;
  productDetail : any= [];

  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];
    this.getProductDetailById();
  }

  getProductDetailById() {
    this.httpProvider.getProductDetailById(this.productId).subscribe((data : any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.productDetail = resultData;
        }
      }
    },
    (error :any)=> { });
  }

}
