import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxCurrencyModule } from "ngx-currency";

import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';
// Modules
import { DefaultModule } from './layouts/default.module';
import { ModalComponent } from './components/modal/home-modal.component';

import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from '@angular/material/table'
import { QuestionModalModule } from './components/modal/question-modal.component';

import { HomepageComponent } from './pages/home/homepage.component';
import { FetchCnpjComponent } from './components/steps/fetch-cnpj.component';
import { StepsService } from './shared/services/steps.service';
import { StepComponent } from './pages/step/step.component';
import { RegisterRequesterComponent } from './components/steps/register-requester.component';
import { VerifyDatasComponent } from './components/steps/verify-datas.component';
import { ConfirmValuesComponent } from './components/steps/confirm-values.component';
import { InfoPasswordModule } from './components/modal/info-password-modal.component';
import { PercentageMaskDirective } from './directives/percentage-mask.directive';


export const customCurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true
};

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StepComponent,
    ModalComponent,
    FetchCnpjComponent,
    VerifyDatasComponent,
    ConfirmValuesComponent,
    RegisterRequesterComponent,
    PercentageMaskDirective
  ],
  imports: [
    RouterModule,
    MatCardModule,
    BrowserModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    QuestionModalModule,
    InfoPasswordModule
  ],
  exports: [
    PercentageMaskDirective
  ],
  providers: [
    FormsModule,
    StepsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
