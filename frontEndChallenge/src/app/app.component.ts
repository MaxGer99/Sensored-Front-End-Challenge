import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEndChallenge';

  // For Stepper
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;

  //For toggle
  showT = false;
  showH = false;
  buttonName = 'Show';
  hide: any;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      location: ['', Validators.required],
      timezone: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      range1: ['', Validators.required],
      range2: ['', Validators.required]
    });

    this.thirdFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.fourthFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

    toggleT() {
      this.showT = !this.showT
    }

    toggleH() {
      this.showH = !this.showH
    }

      //For sliders
      value1: number = 40;
      value2: number = 40;
      highValue1: number = 60;
      highValue2: number = 60;
      options: Options = {
        floor: 50,
        ceil: 80
      };

  submit(){
      console.log(this.firstFormGroup.value + this.secondFormGroup.value);
  }
}
