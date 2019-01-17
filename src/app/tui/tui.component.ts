import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import items from './submenuItems';

@Component({
  selector: 'app-tui',
  templateUrl: './tui.component.html',
  styleUrls: ['./tui.component.sass']
})
export class TuiComponent implements OnInit {
  submenuItems: any;
  filter = {};
  selectedKey = 2;
  myForm: FormGroup;
  userFormDisabled = false;
  loginFormDisabled = false;
  date = new Date();
  loginData = {};

  companies = [
    { name: 'Disney' },
    { name: 'Pixel' },
  ];

  button = 'b1';

  constructor(private fb: FormBuilder) {
    this.myForm = fb.group({
      title: [''],
      serviceType: [''],
      priority: [''],
      params: [[]],
      description: [''],
    });
  }

  ngOnInit() {
    // const itemsObj = JSON.parse(items);
    // this.submenuItems = itemsObj;
    this.myForm.controls['title'].valueChanges.subscribe((sex: string) => {
      console.log('title', sex);
    });
  }

  filterChange($event) {
    console.log($event);
  }

  selectChange(key) {
    console.log('selected key', key);
  }

  submit() {
    const controls = this.myForm.controls;
    const argus: any = {templatePairs: []};
    // controls.forEach(ele => {
    //   argus.templatePairs.push({
    //     field: item,
    //     value: formGet[item].value,
    //   });
    // });
    Object.keys(controls).forEach(control => {
      console.log(control);
    });
    console.log(this.myForm.controls);
  }

}
