import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from "@angular/material/snack-bar";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { StepsService } from '../../shared/services/steps.service';

@Component({
  selector: "home-modal",
  templateUrl: "./home-modal.component.html",
})
export class ModalComponent implements OnInit {
  valor;
  requestFormGroup;
  requestFormGroupErrors: any;
  @Input()
  text;
  @Input()
  isLending;
  router;
  constructor(
    private _formBuilder: FormBuilder,
    private _stepsService: StepsService
  ) {
  }

  ngOnInit(): void {
    this.requestFormGroup = this._formBuilder.group({
      installmentsCount   : [null, [Validators.required]],
      price: [null, Validators.required],
      tax: [null, Validators.required]
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
      installmentsCount: this.requestFormGroup.value.installmentsCount
      }
      this._stepsService.startSteps(params)
    }
  }
}
