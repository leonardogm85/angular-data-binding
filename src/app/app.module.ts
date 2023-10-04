import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DataBindingModule } from './data-binding/data-binding.module';
import { LifeCicleComponent } from './life-cicle/life-cicle.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCicleComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    DataBindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
