import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/home/homepage.component';

// Layouts
import { DefaultComponent } from "./layouts/default.component";

const routes: Routes = [
  // Default views
  {
    path: "home",
    component: DefaultComponent,
    children: [
      { path: "", component: HomepageComponent, pathMatch: "full" },
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
