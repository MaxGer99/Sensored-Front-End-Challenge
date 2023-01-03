import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Options} from '@angular-slider/ngx-slider';

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
  showC = false;
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
      tempSliderVal: ['', Validators.required],
      humSliderVal: ['', Validators.required]
    });

    this.thirdFormGroup = this._formBuilder.group({
      schedule: ['', Validators.required],
    });

    this.fourthFormGroup = this._formBuilder.group({
      selected: ['', Validators.required]
    });
  }

    toggleT() {
      this.showT = !this.showT
    }

    toggleH() {
      this.showH = !this.showH
    }

    toggleC() {
      this.showC = !this.showC
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

      //For calendar TODO
      selected: Date | null | undefined;


  submit(){

    let seen: any[] = [];

    //Converting everything in dom to Json String
    JSON.stringify(this, function(key, val) {
      if (val != null && typeof val == "object") {
           if (seen.indexOf(val) >= 0) {
               return;
           }
           seen.push(val);
       }
       return val;
   });

   //Return Json String
    console.log(seen);
  }

  test(){
    console.log(this.selected)
  }
}
