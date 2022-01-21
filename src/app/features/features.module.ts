import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { ProductsModule } from './products/products.module';
import { PersonModule } from './person/person.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FeaturesRoutingModule, ProductsModule, PersonModule],
  exports: [],
})
export class FeaturesModule {}
