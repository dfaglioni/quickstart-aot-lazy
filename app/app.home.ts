import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  moduleId: module.id,
  template: `<h1>home</h1>`
})
export class HomeComponent {

}

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }


@NgModule({
  imports: [BrowserModule, HomeRoutingModule],
  declarations: [HomeComponent],
})
export class HomeModule { }
