import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyDummyComponent } from './lazy-dummy.component';
import { LazyDummyRoutingModule } from './lazy-dummy-routing.module';

@NgModule({
  imports: [CommonModule, LazyDummyRoutingModule],
  declarations: [LazyDummyComponent],
  exports: [LazyDummyComponent]
})
export class LazyDummyModule { }
