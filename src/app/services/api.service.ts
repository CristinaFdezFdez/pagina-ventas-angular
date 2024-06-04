import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private_http = inject(HttpClient);
  private urlBase: string = 'https://fakestoreapi.com/products';

  getProducts():Observable<IProducts[]>{
    return this.private_http.get<IProducts[]>(this.urlBase);
  }

  getProduct(id: number):Observable<IProducts>{
    return this.private_http.get<IProducts>(`${this.urlBase}/${id}`)
  }
}
