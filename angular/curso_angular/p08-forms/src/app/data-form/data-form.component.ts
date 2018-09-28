import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, /* FormControl */ } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  // Atributo que representa o formulario em si.
  form: FormGroup; // tipo usado em formularios reactivos.
  // Preciso importar no modulo ReactiveFormsModule no modulo onde
  // esta atrelado o componente.

  constructor(private formBuilder: FormBuilder) { }

  // Onde normalmente os formularios reativos devem ser codificados (pode ser no construtor).
  ngOnInit() {

    // Poderia ser assim:
    /*
    this.form = new FormGroup({
      name: new FormControl('Anderson'),
      email: new FormControl()

      endereco: new FormGroup({
        cep: new FormControl(),
        ...
      })
    });
    */

    this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      address: ({
        cep: [null, Validators.required],
        street: [null, Validators.required],
        district: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required]
      })
    });
  }
}
