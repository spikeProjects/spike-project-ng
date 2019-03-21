import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-large-modal',
  templateUrl: './large-modal.component.html',
  styleUrls: ['./large-modal.component.sass']
})
export class LargeModalComponent implements OnInit {
  myForm: FormGroup;
  get email() {
    return this.myForm.get('email');
  }

  last = {
    key: 'lastKey',
    value: 'lastVal'
  };

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
