import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = "";

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(
    // form:   HTMLFormElement, 
    ngForm: NgForm
  ){
    // console.log(form);
    // console.log("SUBMITTED MY GUY")
    // console.log("<=========================================================>");
    console.log();
    console.log(ngForm);

  };

}

