import { Component, OnInit } from '@angular/core';
import items from './submenuItems';

@Component({
  selector: 'app-tui',
  templateUrl: './tui.component.html',
  styleUrls: ['./tui.component.sass']
})
export class TuiComponent implements OnInit {
  submenuItems: any;
  filter = {};
  selectedKey = 2;

  constructor() { }

  ngOnInit() {
    const itemsObj = JSON.parse(items);
    this.submenuItems = itemsObj;
  }

  filterChange($event) {
    console.log($event);
  }

  selectChange(key) {
    console.log('selected key', key);
  }

}
