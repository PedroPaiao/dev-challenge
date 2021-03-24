import { NgModule } from '@angular/core';

import { DefaultComponent } from './default.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [DefaultComponent]
})
export class DefaultModule { }
