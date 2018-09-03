import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, of } from 'rxjs';
import { debounceTime, pluck, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-rx-spike',
  templateUrl: './rx-spike.component.html',
  styleUrls: ['./rx-spike.component.sass']
})
export class RxSpikeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const body = document.querySelector('.layout-body');
    const body = document.body;
    console.log('body', body);
    const tg = document.querySelector('#tg');

    // for every keyup, map to current input value
    const example = fromEvent(window, 'resize');

    // wait .5s between keyups to emit current value
    // throw away all other values
    // https://blog.csdn.net/langyalaoa/article/details/81912513
    const debouncedInput = example.pipe(
      debounceTime(500)
    );

    // log values
    const subscribe = debouncedInput.subscribe(val => {
      console.log(`Debounced Input: ${val}`);
    });

  }

}
