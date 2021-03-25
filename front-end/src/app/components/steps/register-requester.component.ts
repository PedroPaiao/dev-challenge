import { Component, OnInit, NgModule } from '@angular/core';
import { NgbModalModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: "register-requester",
  templateUrl: "./register-requester.component.html",
  styleUrls: []
})

export class RegisterRequester implements OnInit {
  requestFormGroup;
  requestFormGroupErrors: any;
  constructor(
    public activeModal: NgbActiveModal,
    private _formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    
    this.requestFormGroup = this._formBuilder.group({
      cnpj : ["", [Validators.required]],
      companyName: ["", [Validators.required]]
    });

  }

  onSubmit(){}
}

@NgModule({
  declarations: [RegisterRequester],
  exports: [RegisterRequester],
  imports: [
    NgbModalModule,
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [FormsModule],
  entryComponents: [RegisterRequester]
})

export class RegisterRequesterModule {}