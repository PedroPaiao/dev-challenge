import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/home/homepage.component';
import { FetchCnpjComponent } from './components/steps/fetch-cnpj.component';

// Layouts
import { DefaultComponent } from "./layouts/default.component";
import { StepComponent } from './pages/step/step.component';
import { RegisterRequesterComponent } from './components/steps/register-requester.component';
import { VerifyDatasComponent } from './components/steps/verify-datas.component';
import { ConfirmValuesComponent } from './components/steps/confirm-values.component';

const routes: Routes = [
  // Default views
  {
    path: "home",
    component: DefaultComponent,
    children: [
      { path: "", component: HomepageComponent, pathMatch: "full" },
    ]
  },
  {
    path: "solicitation",
    component: DefaultComponent,
    children:[
      { path: "step",
        component: StepComponent,
        children: [
          { path: "fetch-cnpj", component: FetchCnpjComponent, pathMatch: 'full'},
          { path: "register-requester", component: RegisterRequesterComponent, pathMatch: 'full'},
          { path: "verify-datas", component: VerifyDatasComponent, pathMatch: 'full'},
          { path: "confirm-values", component: ConfirmValuesComponent, pathMatch: 'full'}
        ] 
      }
    ]
  },
  
  // If not pass one match path
  { path: "", redirectTo: "home" , pathMatch: 'full'},
  { path: "**", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
