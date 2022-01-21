import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule,MatButtonModule],
  exports: [ListComponent, FormComponent],
})
export class SharedModule {}
