import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  frmData;
  name;
  email;

  constructor() { }

  ngOnInit() {
    this.createReactiveForms();
  }

  onSubmit(f) {
    console.log(`${f.value.email} - ${f.value.name}`);
  }

  createReactiveForms() {
    this.frmData = new FormGroup({
      fname: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(45), Validators.minLength(3)])),
      femail: new FormControl('', Validators.compose([Validators.required, Validators.email]))
    });
  }

  onSubmitReactive(datas) {
    console.log(datas);
    this.name = datas.fname;
    this.email = datas.femail;
  }
}
