import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: "homepage-component",
  templateUrl: "./homepage.component.html",
})
export class HomepageComponent implements OnInit {
  valor;
  changeFormGroup;
  changeFormGroupErrors: any;
  controlType = 'example-tel-input';
  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.changeFormGroup = this.formBuilder.group({
      password   : ['', [Validators.required, Validators.minLength(5)]],
      passwordConfirmation: ['', Validators.required],
    });

    this.changeFormGroup.valueChanges.subscribe(() => {
      this.onsettingsFormValuesChanged();
    });
  }

  onsettingsFormValuesChanged() {
    for ( const field in this.changeFormGroupErrors )
    {
      if ( !this.changeFormGroupErrors.hasOwnProperty(field) )
      {
        continue;
      }

      // Limpa erros que podem ter ocorrido
      this.changeFormGroupErrors[field] = {};

      // Pega os controladores do form
      const control = this.changeFormGroup.get(field);

      if ( control && control.dirty && !control.valid )
      {
        this.changeFormGroupErrors[field] = control.errors;
      }
    }
  }

  teste() {
      console.log("ola")
  }
}
