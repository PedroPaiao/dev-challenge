import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [DefaultComponent]
})
export class DefaultModule { }
