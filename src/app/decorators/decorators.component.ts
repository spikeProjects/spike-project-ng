import { Component, OnInit } from '@angular/core';
import {
  Cat, /*readonly,*/ Dog,
  Person,
  MySuperHero,
} from './decorators.model';

import {
  readonly,
  deprecate,
} from 'core-decorators';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.sass']
})
export class DecoratorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const descriptor = {
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
    Object.defineProperty(obj, 'sex', descriptor);
    console.log(obj);

    // below is for test: configurable
    const cat = new Cat('Tom');
    // Cannot assign to read only property 'meow' of object '[object Object]'
    // cat.meow = function meow() {
    //   console.log('new meow');
    // }
    this.decoratorReadonlyTest();
    this.coreDecoratorTest();
    this.classDecoratorTest();
  }

  decoratorReadonlyTest() {
    // let descriptor: any = {
    //   value: function val() {
    //   },
    //   enumerable: false,
    //   configurable: true,
    //   writable: false
    // };

    // descriptor = readonly(Dog.prototype, 'hao', descriptor) || descriptor;
    // Object.defineProperty(Dog.prototype, 'hao', descriptor);
    const garfield = new Dog('Apply');

    console.log(garfield);
    garfield.hao = function() {
      console.log('I want lasagne!');
      return '';
    };
    garfield.hao();
  }

  coreDecoratorTest() {
    const captainPicard: any = new Person();

    captainPicard.facepalm();
    captainPicard.facepalmHard();
    captainPicard.facepalmHarder();
  }

  classDecoratorTest() {
    const superHero: any = new MySuperHero();
    console.log(MySuperHero);
    // console.log(MySuperHero.isSuperhero);
  }

}
