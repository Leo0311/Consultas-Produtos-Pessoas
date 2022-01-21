import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


import { ProductsService } from 'src/app/core/services/products/products.service';
import { Products } from 'src/app/core/model/products';


@Injectable()
export class ProductsDataResolver implements Resolve<Products[]> {
  constructor(private productsService: ProductsService) {}

  resolve(): Observable<Products[]> {
    return this.productsService.all();
  }
}

@Injectable()
export class ProductDataResolver implements Resolve<Products> {
  constructor(private productsservice: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Products> {
    return this.productsservice.getOne(route.params.id);
  }
}

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      entities: ProductsDataResolver,
    },
  },
  {
    path: 'add',
    component: FormComponent,
  },
  {
    path: ':id',
    component: FormComponent,
    resolve: {
      entity: ProductDataResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProductsDataResolver, ProductDataResolver],
})
export class ProductsRoutingModule {}
