import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFormComponent } from './my-form.component';

//Para trabalhar com formulário
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MyFormComponent],
  exports:[MyFormComponent]
})
export class MyFormModule { }
