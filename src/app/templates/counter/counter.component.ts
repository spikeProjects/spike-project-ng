import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>{{count}}</p>
  `,
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit {
  private static id = 10;
  count: number;

  constructor() {
    this.count = CounterComponent.id ++;
  }

  ngOnInit() {
  }

}
