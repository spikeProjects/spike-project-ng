import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  get email() {
    return this.myForm.get('email');
  }

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    const me = this;
    this.myForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.compose([
          Validators.required,
          // Validators.pattern(patterns.password),
        ])],
      'fullName': ['', Validators.required],
      'email': [
        '',
        Validators.compose([
          Validators.required,
          // Validators.pattern(patterns.email),
          // forbiddenEmailValidator(patterns.notAllowedEmailPattern)
        ]),
      ],
      'deletable': ['true', Validators.required],

      'textarea': ['true', Validators.required],
    });

    this.myForm.statusChanges.subscribe(argu => {
      console.log(me.myForm);
    });
    this.myForm.valueChanges.subscribe(argu => {
      console.log(me.myForm);
    });
  }

}
