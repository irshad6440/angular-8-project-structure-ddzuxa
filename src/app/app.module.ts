import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from "./app.routing";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { InitCapsPipe } from './shared/init-caps.pipe';


@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, InitCapsPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
