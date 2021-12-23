import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { ContentComponent } from './content/content.component';
import { IntrpolationComponent } from './intrpolation/intrpolation.component';
import { SportComponent } from './sport/sport.component';

const routes: Routes = [
  {path:'',component:ContentComponent},
  {path:'cars',component:CarsComponent},
  {path:'interpolation',component:IntrpolationComponent},
  {path:'sport',component:SportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
