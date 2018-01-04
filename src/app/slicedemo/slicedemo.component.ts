import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slicedemo',
  templateUrl: './slicedemo.component.html',
  styleUrls: ['./slicedemo.component.css']
})
export class SlicedemoComponent implements OnInit {
collection:string[]=['a','b','c','d','e','f'];
  constructor() { }

  ngOnInit() {
  }

}
