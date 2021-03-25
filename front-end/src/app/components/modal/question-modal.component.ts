import { Component, OnInit, NgModule } from '@angular/core';
import { NgbModalModule, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: "question-modal",
  templateUrl: "./question-modal.component.html",
  styleUrls: []
})

export class QuestionModalComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
  ) {}

  ngOnInit(){}
}

@NgModule({
  declarations: [QuestionModalComponent],
  exports: [QuestionModalComponent],
  imports: [
    NgbModalModule,
    CommonModule,
    MatButtonModule,
  ],
  entryComponents: [QuestionModalComponent]
})

export class QuestionModalModule {}