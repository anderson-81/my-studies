import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataFormComponent } from './data-form.component';

@NgModule({
  imports: [
    CommonModule, // Nao e necessario declarar o
    ReactiveFormsModule
  ],
  declarations: [DataFormComponent]
})
export class DataFormModule { }
