import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  signupForm: FormGroup;
  projectStatuses: ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required, this.forbiddenProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Critical')
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
    console.log(this.signupForm);
  }

  forbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test') {
          resolve({'nameIsForbidden': true}) ;
        } else {
          resolve(null);
        }
      },1500);
    });
    return promise; 
  }
}
