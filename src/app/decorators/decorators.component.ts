import { Component, OnInit } from '@angular/core';
import { Cat } from './decorators.model';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.sass']
})
export class DecoratorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	let descriptor = { 
  		value: function desc(params) {
  			console.log(params, 'in sex function.');
  		},
		enumerable: false,
		configurable: true,
		writable: true
	};
  	const obj = {
  		name: 'rockwang',
  		age: 35
  	};
  	Object.defineProperty(obj, 'sex', {
  		...descriptor
  	});
  	console.log(obj);

  	////////////////////////////
  	let cat = new Cat('Tom');
  	cat.meow = function meow() {
  		console.log('new meow');
  	}

  }

}
