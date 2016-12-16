import { Component } from '@angular/core';

/**
 * To test the modules included only in lazy modules
 */
@Component({
  moduleId: module.id,
  selector: 'sd-lazy',
  template: `<h2>lazy</h2>`
})
export class LazyDummyComponent  {

}
