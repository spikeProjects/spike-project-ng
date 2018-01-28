import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-rx-spike',
  templateUrl: './rx-spike.component.html',
  styleUrls: ['./rx-spike.component.sass']
})
export class RxSpikeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	// const body = document.querySelector('.layout-body');
	let body = document.body;
	console.log('body', body);
	let tg = document.querySelector('#tg');

	//for every keyup, map to current input value
	const example = Rx.Observable.fromEvent(window, 'resize');

	//wait .5s between keyups to emit current value
	//throw away all other values
	const debouncedInput = example.throttleTime(500);

	//log values
	const subscribe = debouncedInput.subscribe(val => {
		console.log(`Debounced Input: ${val}`);
	});

  }

}
