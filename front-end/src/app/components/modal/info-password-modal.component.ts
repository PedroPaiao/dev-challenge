import { Component, OnInit, NgModule } from '@angular/core';
import { NgbModalModule, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: "info-password-modal",
  templateUrl: "./info-password-modal.component.html",
  styleUrls: []
})

export class InfoPasswordModalComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
  ) {}

  ngOnInit(){}
}

@NgModule({
  declarations: [InfoPasswordModalComponent],
  exports: [InfoPasswordModalComponent],
  imports: [
    NgbModalModule,
    CommonModule,
    MatButtonModule,
  ],
  entryComponents: [InfoPasswordModalComponent]
})

export class InfoPasswordModule {}