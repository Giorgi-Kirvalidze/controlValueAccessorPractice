import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

const NG_VALUE_ACCESSOR_PROVIDER = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CarComponent),
  multi: true
}

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  providers:[NG_VALUE_ACCESSOR_PROVIDER]
})
export class CarComponent implements OnInit, ControlValueAccessor {
  val!: string;
  disabled = false;
  private onTouched!: Function;
  private onChanged!: Function;

  constructor() { }
  ngOnInit(): void {
  }

  onInput(event:{ target: HTMLInputElement }){
    this.val = event.target.value;
    this.onChanged(this.val);
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(val: any): void {
  }



}
