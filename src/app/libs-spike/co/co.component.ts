import { Component, OnInit } from '@angular/core';
// import * as fs from 'fs';


@Component({
  selector: 'app-co',
  templateUrl: './co.component.html',
  styleUrls: ['./co.component.sass']
})
export class CoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.read();
  }

  read() {
/*    fs.readFile('./file01.json', (err, data) => {
      if (err) {
        return console.log(err)
      }
      console.log(data.toString())
      fs.readFile('./file02.json', (err, data) => {
        if (err) {
          return console.log(err)
        }
        console.log(data.toString())
      })
    })
*/
  }

  readWithCo() {
/*    fs.readFile('./file01.json', (err, data) => {
      if (err) {
        return console.log(err)
      }
      console.log(data.toString())
      fs.readFile('./file02.json', (err, data) => {
        if (err) {
          return console.log(err)
        }
        console.log(data.toString())
      })
    })*/
  }

}
