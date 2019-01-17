import { Component, HostBinding, HostListener } from '@angular/core';
import { utils } from 'spike-npm-publish'; // native js npm;


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
    // console.log(utils);

    window.onbeforeunload = function(e) {
      alert(1);
    };
    window.onunload = function(e) {
      alert(21);
    };
  }

  @HostListener('window:beforeunload', ['$event'])
  public beforeunloadHandler(event) {
    alert('fuck');
  }

  @HostListener('window:onunload', ['$event'])
  public beforeonunload(event) {
    alert('fuc2');
  }
}
