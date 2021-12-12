import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  titlestyle="block"
  car="serie e"
  constructor() { }

  ngOnInit(): void {
  }
  red(){
    this.titlestyle="color:red;"
  }
  green(){
    this.titlestyle="color:green;"
  }

}
