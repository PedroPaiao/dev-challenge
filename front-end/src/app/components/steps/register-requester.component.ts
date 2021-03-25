import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InfoPasswordModalComponent } from '../modal/info-password-modal.component';

@Component({
  selector: "register-requester",
  templateUrl: "./register-requester.component.html",
  styleUrls: []
})

export class RegisterRequesterComponent implements OnInit {
  requestFormGroup;
  requestFormGroupErrors: any;
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    
    this.requestFormGroup = this._formBuilder.group({
      cnpj : ["", [Validators.required]],
      companyName: ["", [Validators.required]],
      address: ["", Validators.required],
      phone: ["", Validators.required]
    });

  }

  backToHome(){
    this._router.navigate(["/home"])
  }

  confirmRegister(){
    let activeModal = this._modalService.open(InfoPasswordModalComponent, {
      centered: true,
      size: "md",
    })
    activeModal.result.then(res => {
      this._router.navigate(["/solicitation/step/verify-datas"])
    }).catch(er => {
      this._router.navigate(["/home"])
    })
  }
}

export class RegisterRequesterModule {}