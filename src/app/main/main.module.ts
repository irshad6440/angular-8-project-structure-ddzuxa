import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';

import { mainRouting }  from './main.routing';

import { MainComponent }  from './main.component';

@NgModule({
  imports:      [
    CommonModule,
    mainRouting
  ],
  declarations: [
    MainComponent    
  ],
  providers: [  ]
})
export class MainModule { }
