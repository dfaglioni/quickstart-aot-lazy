import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LazyDummyComponent } from './lazy-dummy.component';
import { LazyDummyRoutingModule } from './lazy-dummy-routing.module';

@NgModule({
  imports: [BrowserModule, LazyDummyRoutingModule],
  declarations: [LazyDummyComponent],
  exports: [LazyDummyComponent]
})
export class LazyDummyModule { }
