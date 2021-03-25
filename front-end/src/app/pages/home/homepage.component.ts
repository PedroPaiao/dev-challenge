import { Component, OnInit } from "@angular/core";

@Component({
  selector: "homepage-component",
  templateUrl: "./homepage.component.html",
})
export class HomepageComponent implements OnInit {
  lending = "Emprestimo"
  credit_request = "Solicitação de Credito"
  creditRequestType = "creditRequest"
  lendingType = "lending"
  constructor(
  ) {}

  ngOnInit(): void {}
}
