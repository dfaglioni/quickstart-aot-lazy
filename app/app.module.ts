import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { HomeComponent, HomeModule } from './app.home';

@NgModule({
  imports: [
    RouterModule.forRoot([
       { path: '', component: HomeComponent },
       { path: 'lazy', loadChildren: 'app/lazy-dummy/lazy-dummy.module#LazyDummyModule' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


@NgModule({
  imports:      [ BrowserModule, RouterModule, AppRoutingModule, HomeModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
