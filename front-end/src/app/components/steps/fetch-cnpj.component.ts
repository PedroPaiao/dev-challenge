import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from "@angular/material/snack-bar";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "fetch-cnpj",
  templateUrl: "./fetch-cnpj.component.html",
  host: {
    class: "step-card"
  }
})
export class FetchCnpjComponent implements OnInit {
  valor;
  requestFormGroup;
  requestFormGroupErrors: any;
  @Input()
  text;
  @Input()
  isLending;
  _stepsService;
  constructor(
    private _formBuilder: FormBuilder,
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
    if(this.requestFormGroup.valid) {
      let params = {
      price: this.requestFormGroup.value.price,
      tax: this.requestFormGroup.value.tax,
      installments_count: this.requestFormGroup.value.installments_count
      }
      this._stepsService.startSteps(params)
    }
  }
}
