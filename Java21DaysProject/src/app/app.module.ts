import { MaterialsModule } from './materials/materials.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Day1Component } from './Days/day1/day1.component';
import { Day2Component } from './Days/day2/day2.component';
import { Day3Component } from './Days/day3/day3.component';
import { Day4Component } from './Days/day4/day4.component';
import { Day5Component } from './Days/day5/day5.component';
import { Day6Component } from './Days/day6/day6.component';
import { Day7Component } from './Days/day7/day7.component';
import { Day8Component } from './Days/day8/day8.component';
import { Day9Component } from './Days/day9/day9.component';
import { Day10Component } from './Days/day10/day10.component';
import { Day11Component } from './Days/day11/day11.component';
import { Day12Component } from './Days/day12/day12.component';
import { Day13Component } from './Days/day13/day13.component';
import { Day14Component } from './Days/day14/day14.component';
import { Day15Component } from './Days/day15/day15.component';
import { Day16Component } from './Days/day16/day16.component';
import { Day17Component } from './Days/day17/day17.component';
import { Day18Component } from './Days/day18/day18.component';
import { Day19Component } from './Days/day19/day19.component';
import { Day20Component } from './Days/day20/day20.component';
import { Day21Component } from './Days/day21/day21.component';
import { SideNavComponent } from './SideNav/side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Day1Component,
    Day2Component,
    Day3Component,
    Day4Component,
    Day5Component,
    Day6Component,
    Day7Component,
    Day8Component,
    Day9Component,
    Day10Component,
    Day11Component,
    Day12Component,
    Day13Component,
    Day14Component,
    Day15Component,
    Day16Component,
    Day17Component,
    Day18Component,
    Day19Component,
    Day20Component,
    Day21Component,
    SideNavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
