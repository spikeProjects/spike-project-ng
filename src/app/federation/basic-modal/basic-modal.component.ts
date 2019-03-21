import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

import { patterns } from 'app/shared';
import { forbiddenLetterValidator, forbiddenEmailValidator } from 'app/shared';

@Component({
  selector: 'app-basic-modal',
  templateUrl: './basic-modal.component.html',
  styleUrls: ['./basic-modal.component.sass']
})
export class BasicModalComponent implements OnInit {
  myForm: FormGroup;
  get email() {
    return this.myForm.get('email');
  }

  last = {
    key: 'lastKey',
    value: 'lastVal'
  };
  fuckCopy = 'fuck you ';

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    const me = this;
    this.myForm = this.fb.group({
      'username': ['', Validators.compose([
          Validators.required,
          // Validators.pattern(patterns.phone),
          forbiddenLetterValidator(patterns.special)

        ])
    ],
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
          forbiddenEmailValidator(patterns.notAllowedEmailPattern)
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

  submit(value: {[s: string]: string}) {
    delete value.confirm;
    // this.accountService.changePWD({...value}).subscribe(res => {
    //   this.message.success(this.translateService.translateKey('ACCOUNT.SUCCEED'));
    //   setTimeout(function() {
    //     history.go(-1);
    //   }, 600);
    // });
  }

  copySuccessFun(fuck) {
    console.log('fuck , copyed');
    fuck.select();
  }

}
