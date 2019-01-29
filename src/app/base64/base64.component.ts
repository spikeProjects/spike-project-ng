import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { fileReader } from './utils';

import { Subject ,  Subscription } from 'rxjs';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.sass']
})
export class Base64Component implements OnInit, AfterViewInit {

  imageBase64: any;
  base64Subject = new Subject();

  constructor(
    private zone: NgZone
  ) {
    // this.outputFile = this.outputFile.bind(this);
  }

  ngOnInit() {
    this.base64Subject.subscribe(result => {
      this.imageBase64 = result;
    });

  }

  ngAfterViewInit() {
    fileReader('image', this.base64Subject);
    // this.zone.runOutsideAngular(() => {});
  }

  // outputFile(result) {
  //   this.imageBase64 = result;
  //   console.log(result);
  //   // TODO: need to reduce the click event, just put it inside ngZone
  // }

}
