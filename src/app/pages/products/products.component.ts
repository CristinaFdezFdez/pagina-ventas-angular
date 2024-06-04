import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProducts } from '../../models/product.model';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productList: IProducts[]=[]
  private _apiService = inject(ApiService);
  private _router = inject(Router);
  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data:IProducts[]) => {
      this.productList = data;
    });
  }
  navigate(id:number): void{
    this._router.navigate(['/products', id])
  }
}
