import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/core/model/products';
import { ProductsService } from 'src/app/core/services/products/products.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products :Products[] = [];
  headers: string[] = ['Id','Name','Departament','Price','comment'];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {}

  deleteProduct(event): void {
    this.productService.delete(event.id).subscribe(()=>{
    this.productService.all().subscribe(event.callback);
    });
  }
searchProduct(event){
  this.productService.all({ query: event.query}).subscribe(event.callback);
}
limitProduct(event){
  this.productService.all({ limit: event.limit, query: "mesa"}).subscribe(event.calllback);
  }
}
