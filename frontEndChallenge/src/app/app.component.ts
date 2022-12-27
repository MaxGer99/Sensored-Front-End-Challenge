import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  submit(){
      console.log(this.firstFormGroup.value + this.secondFormGroup.value);
  }
}
