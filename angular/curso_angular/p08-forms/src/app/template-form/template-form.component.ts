import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  person: any = {
    name: null,
    email: null,
    address: {
      street: null,
      cep: null,
      num: null,
      complement: null,
      district: null,
      city: null,
      state: null
    }
  };

  constructor(private http: Http) { }

  ngOnInit() {
  }

  SubmitForm(form) {
    // Mesmos valores:
    // console.log(form);
    // console.log(this.person);

    // Emulando um post
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .map(resposta => resposta)
      .subscribe(datas => console.log(datas));
  }

  // Utilizados para colocar mensagens de erro nos campos.
  private checkValidTouch(input) {
    return !input.valid && input.touched;
  }

  setError(input) {
    return {
      'has-error': this.checkValidTouch(input),
      'has-feedback': this.checkValidTouch(input)
    };
  }

  SearchCep(cep, form) {
    // Limpando os dados (somente numeros);
    cep = cep.replace(/\D/g, '');
    const validacep = /^[0-9]{8}$/;
    if (validacep.test(cep)) {
      this.ResetAddress(form);
      this.http.get(`//viacep.com.br/ws/${cep}/json`)
        .map(datas => datas.json())
        // .subscribe(datas => console.log(datas));
        .subscribe(datas => this.fillsForm(form, datas));
    }
  }

  private fillsForm(form, datas) {
    console.log(form, datas);
    /*
    form.setValue({
      name: form.value.name,
      email: form.value.email,
      address: {
        street: datas.logradouro,
        cep: datas.cep,
        num: '',
        complement: datas.complemento,
        district: datas.bairro,
        city: datas.localidade,
        state: datas.uf
      }
    });
    */
    form.form.patchValue({
      address: {
        street: datas.logradouro,
        cep: datas.cep,
        num: '',
        complement: datas.complemento,
        district: datas.bairro,
        city: datas.localidade,
        state: datas.uf
      }
    });
  }

  ResetAddress(form) {
    form.form.patchValue({
      address: {
        street: null,
        num: null,
        complement: null,
        district: null,
        city: null,
        state: null
      }
    });
  }
}
