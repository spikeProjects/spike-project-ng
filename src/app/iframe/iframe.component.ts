import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.sass']
})
export class IframeComponent implements OnInit {
  iframeSrc: any;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    const url = 'http://www.warpcloud.cn/#/documents-support/docs/products?category=TDH';
    const videoUrl = 'https://v.qq.com/iframe/player.html?vid=a0606eyaq2w&tiny=0&auto=0';
    const iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.iframeSrc = iframeSrc;

  }

}
