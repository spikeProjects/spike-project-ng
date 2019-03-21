import { Component, OnInit, NgZone} from '@angular/core';
import { TuiModalRef, TuiModalService } from 'tdc-ui';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

import { BasicModalComponent } from '../basic-modal/basic-modal.component';
import { LargeModalComponent } from '../large-modal/large-modal.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  constructor(
    fb: FormBuilder,
    private modalService: TuiModalService,
    private zone: NgZone
  ) { }

  ngOnInit() {
    // this.zone.runOutsideAngular(_ => {
    // });
    setTimeout(() => {
      this.openMiddleModal();
      // this.openLargeModal();
    }, 0);
  }

  openMiddleModal(size = 'md') {
    return this.modalService.open(BasicModalComponent, {
      title: '上传许可证',
      size,
    })
      .subscribe((word: string) => {

      });
  }

  openLargeModal(size = 'lg') {
    return this.modalService.open(LargeModalComponent, {
      title: '上传许可证',
      size,
    })
      .subscribe((word: string) => {

      });
  }

}
