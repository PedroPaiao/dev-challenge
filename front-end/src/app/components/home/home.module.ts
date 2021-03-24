import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxCurrencyModule } from 'ngx-currency';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    NgxCurrencyModule,
    ReactiveFormsModule
  ],
  providers: [FormsModule],
  bootstrap: [HomepageComponent]
})
export class HomeModule {}
