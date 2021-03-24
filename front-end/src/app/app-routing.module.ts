import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Layouts
import { DefaultComponent } from "./layouts/default.component";

const routes: Routes = [
  // Default views
  {
    path: "home",
    component: DefaultComponent,
    children: []
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
