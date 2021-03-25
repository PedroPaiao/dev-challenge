import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: "fetch-cnpj",
  templateUrl: "./fetch-cnpj.component.html",
  host: {
    class: "step-card"
  }
})
export class FetchCnpjComponent implements OnInit {
  requestFormGroup;
  requestFormGroupErrors: any;
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.requestFormGroup = this._formBuilder.group({
      cnpj   : ["", [Validators.required]]
    });

    this.requestFormGroup.valueChanges.subscribe(() => {
      this.onsettingsFormValuesChanged();
    });
  }

  onsettingsFormValuesChanged() {
    for ( const field in this.requestFormGroupErrors )
    {
      if ( !this.requestFormGroupErrors.hasOwnProperty(field) )
      {
        continue;
      }
      // Limpa erros que podem ter ocorrido
      this.requestFormGroupErrors[field] = {};
      // Pega os controladores do form
      const control = this.requestFormGroup.get(field);
      if ( control && control.dirty && !control.valid )
      {
        this.requestFormGroupErrors[field] = control.errors;
      }
    }
  }

  onSubmit(): void {
    this._router.navigate(["/solicitation//verify-datas"])
  }
}
