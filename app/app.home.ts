import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  template: `<h1>home</h1>`
})
export class HomeComponent {

}

@NgModule({
  imports: [BrowserModule],
  declarations: [HomeComponent],
})
export class HomeModule { }
