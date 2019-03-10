import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') authForm: NgForm;

  subs = ['Basic', 'Advanced', 'Pro'];
  subChoice = 'Advanced';

  submitted = false;

  loginDetails = {
    emailAdress: '',
    sub: '',
    pwd: ''
  };

  onSubmit() {
    console.log(this.authForm);
    this.submitted = true;

    this.loginDetails.emailAdress = this.authForm.value.email;
    this.loginDetails.sub = this.authForm.value.subscriptions;
    this.loginDetails.pwd = this.authForm.value.password;
  }
}
