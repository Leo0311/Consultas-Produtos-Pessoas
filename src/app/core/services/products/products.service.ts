import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from '../../model/products';



@Injectable({
  providedIn: 'root',
})
export class  ProductsService {
  private baseUrl = `${environment.baseUrl}/products`;

  constructor(private http: HttpClient) {}

  all(queryParams?: { query?: string; limit?: number }): Observable<Products[]> {
    let params = {};

    if (queryParams) {
      const { query, limit } = queryParams;

      params = query ? { q: query } : {};
      params = limit ? { ...params, ...{ _limit: limit } } : params;
    }

    return this.http.get<Products[]>(this.baseUrl, { params });
  }

  getOne(id: number): Observable<Products> {
    return this.http.get<Products>(`${this.baseUrl}/${id}`);
  }

  delete(id: number): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  upsert(products: Products ) {
    if (products.id) {
      return this.http.patch<Products>(`${this.baseUrl}/${products.id}`, products);
    } else {
      return this.http.post<Products>(this.baseUrl, products);
    }
  }
}
