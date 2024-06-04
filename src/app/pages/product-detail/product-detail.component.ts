import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProducts } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  loading: boolean = true;
  public product?: IProducts;

  private _route = inject(ActivatedRoute)
  private _apiService = inject(ApiService);

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      this._apiService.getProduct(params['id']).subscribe((data: IProducts)=>{
      this.product = data;
      this.loading = false;
    })
  })
}
}
