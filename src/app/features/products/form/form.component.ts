import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/core/model/products';
import { ProductsService } from 'src/app/core/services/products/products.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formProducts: FormGroup;
  formTypeLabel: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private formBuilder: FormBuilder,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.formProducts = this.formBuilder.group({
      id:'',
      name:'',
      imageurl:'',
      departament:'',
      price:'',
      comment:'',
    });

    const hasId = Boolean(this.activatedRoute.snapshot.params.id);

    this.formTypeLabel = hasId ? 'Atualizar ':'cadastrar';
  }

  submit(event :Products):void {
    this.productService.upsert(event).subscribe(() =>{
      this.router.navigate(['..'],{ relativeTo:this.activatedRoute });
    });
  }
}
