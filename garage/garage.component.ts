import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss']
})
export class GarageComponent implements OnInit {
  form!: FormGroup;
  disableFields = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      carModel : [''],
      garageName : ['']
    })
  }
  disableEnableInputs(){
    this.disableFields = !this.disableFields;
    if(this.disableFields){
      Object.keys(this.form.controls).forEach(el =>{
        this.form.get(el)?.disable();
      })
    }else{
      Object.keys(this.form.controls).forEach(el =>{
        this.form.get(el)?.enable();
      })
    }
  }

  submitForm(form : FormGroup){
    console.log(form.value);
  }
}
