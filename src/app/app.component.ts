import { Component, HostBinding } from '@angular/core';
import { utils } from 'spike-npm-publish';//native js npm;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  @HostBinding('class.layout-body') hostClass = true;

  title = 'app';

  constructor(
  ) {
  	console.log(utils)
  }
}
