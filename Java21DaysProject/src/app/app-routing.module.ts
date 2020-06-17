import { HomeComponent } from './home/home.component';
import { Day21Component } from './Days/day21/day21.component';
import { Day20Component } from './Days/day20/day20.component';
import { Day19Component } from './Days/day19/day19.component';
import { Day18Component } from './Days/day18/day18.component';
import { Day17Component } from './Days/day17/day17.component';
import { Day16Component } from './Days/day16/day16.component';
import { Day15Component } from './Days/day15/day15.component';
import { Day14Component } from './Days/day14/day14.component';
import { Day13Component } from './Days/day13/day13.component';
import { Day12Component } from './Days/day12/day12.component';
import { Day11Component } from './Days/day11/day11.component';
import { Day10Component } from './Days/day10/day10.component';
import { Day9Component } from './Days/day9/day9.component';
import { Day8Component } from './Days/day8/day8.component';
import { Day7Component } from './Days/day7/day7.component';
import { Day6Component } from './Days/day6/day6.component';
import { Day5Component } from './Days/day5/day5.component';
import { Day4Component } from './Days/day4/day4.component';
import { Day3Component } from './Days/day3/day3.component';
import { Day2Component } from './Days/day2/day2.component';
import { Day1Component } from './Days/day1/day1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'Day1',component:Day1Component},
  {path:'Day2',component:Day2Component},
  {path:'Day3',component:Day3Component},
  {path:'Day4',component:Day4Component},
  {path:'Day5',component:Day5Component},
  {path:'Day6',component:Day6Component},
  {path:'Day7',component:Day7Component},
  {path:'Day8',component:Day8Component},
  {path:'Day9',component:Day9Component},
  {path:'Day10',component:Day10Component},
  {path:'Day11',component:Day11Component},
  {path:'Day12',component:Day12Component},
  {path:'Day13',component:Day13Component},
  {path:'Day14',component:Day14Component},
  {path:'Day15',component:Day15Component},
  {path:'Day16',component:Day16Component},
  {path:'Day17',component:Day17Component},
  {path:'Day18',component:Day18Component},
  {path:'Day19',component:Day19Component},
  {path:'Day20',component:Day20Component},
  {path:'Day21',component:Day21Component},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
