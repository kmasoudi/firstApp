import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
getId=''
  constructor(private route:ActivatedRoute) {
    this.route.queryParams.subscribe(data=>{
      this.getId=(data["id"])
    })
   }

  ngOnInit(): void {
  }

}
[]