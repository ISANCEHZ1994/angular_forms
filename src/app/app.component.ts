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
  genders = [ "male", "female" ];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // setValue - will replace the value with anything you SET 
    // DOWNSIDE: if we had a previous value that we wanted it will be lost and OVERRIDEN if not specficed!
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })
    // patchValue - think of an update PATCH - whatever values you have before will stay and only the different ones will change!
    // NOTE: we need to .form to use patchValue!
    // in the case below only username will change with every other data in the inputs remaining the same!
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  onSubmit(
    // form:   HTMLFormElement, 
    // ngForm: NgForm
  ){
    // console.log(form);
    // console.log("SUBMITTED MY GUY")
    // console.log(ngForm);
    // console.log(this.signupForm);

    this.submitted = true;
    // the userData.<VALUE> will represent the NAME that is stated inside of the html file
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.userData.secret;
    this.user.answer = this.signupForm.value.userData.questionAnswer;
    this.user.gender = this.signupForm.value.userData.gender;

    this.signupForm.reset(); // upon completion and when the info is displayed below - the inputs will be empty
    
  };

}

