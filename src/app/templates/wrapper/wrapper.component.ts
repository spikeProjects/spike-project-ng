import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  template: `
    <div>
      <h1>Test ng-content</h1>
      <!-- <ng-content></ng-content> -->
    </div>
    <!--will be replaced by app-counter-->
    <ng-content></ng-content>
  `,
  styleUrls: ['./wrapper.component.sass']
})
export class WrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
