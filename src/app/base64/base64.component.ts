import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { fileReader } from './utils';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.sass']
})
export class Base64Component implements OnInit, AfterViewInit {

  imageBase64: any;

  constructor(
    private zone: NgZone
  ) {
    this.outputFile = this.outputFile.bind(this);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    fileReader('image', this.outputFile);
    // this.zone.runOutsideAngular(() => {
    // });
  }

  outputFile(result) {
    this.imageBase64 = result;
    console.log(result);
    // TODO: need to reduce the click event, just put it inside ngZone
  }

}
