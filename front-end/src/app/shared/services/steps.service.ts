import { MatSnackBar } from "@angular/material/snack-bar";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { QuestionModalComponent } from "src/app/components/modal/question-modal.component";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable()
export class StepsService {
  params;
  constructor(
    private _modalService: NgbModal,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}

  startSteps(params) {
   this.params = params
   this.firstStep()
  }

  firstStep() {
    let activeModal = this._modalService.open(QuestionModalComponent, {
      centered: true,
      size: "sm",
    })
    activeModal.result.then(res => {
      this._router.navigate(["/solicitation/step/fetch-cnpj"])
    }).catch(er => {
      // this.registerRequester()
    })
  }

  errorSnackBar(message) {
    this._snackBar.open(message, '',{
      duration: 2000
    });
  }

  successSnackBar(message) {
    this._snackBar.open(message, '',{
      duration: 2000
    });
  }
}