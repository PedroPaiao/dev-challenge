import { Component, OnInit } from "@angular/core";

@Component({
  selector: "step-component",
  templateUrl: "./step.component.html",
  styleUrls: ["./step.component.scss"]
})
export class StepComponent implements OnInit {
  lending = "Emprestimo"
  credit_request = "Solicitação de Credito"
  creditRequestType = "creditRequest"
  lendingType = "lending"
  constructor(
  ) {}

  ngOnInit(): void {}
}
