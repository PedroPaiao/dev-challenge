import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

export interface PeriodicElement {
    companyName: string;
    cnpj: String;
    address: String;
    phone: String;
  }
  
const ELEMENT_DATA: PeriodicElement[] = [
{cnpj: "00.000.000/0000-00",  companyName: 'Hydrogen', address: "Rua dos bobos, coopharadio, 24", phone: '(16) 98180-5545'},
{cnpj: null, companyName: null,       address: "Rua dos bobos, coopharadio, 24",                    phone: '(16) 98180-5545'},
{cnpj: null, companyName: null,       address: "Rua dos bobos, coopharadio, 24",                    phone: '(16) 98180-5545'},
];

@Component({
  selector: "verify-datas",
  templateUrl: "./verify-datas.component.html",
  host: {
    class: "step-card"
  }
})
export class VerifyDatasComponent implements OnInit {
  displayedColumns: string[] = ['cnpj', 'companyName', 'address', 'phone'];
  dataSource = ELEMENT_DATA;
  constructor(
    private _router: Router,
  ) {}

  ngOnInit(): void {}

  backToHome(): void {
    this._router.navigate(["/home"]);
  }

  confirmDatas() {
    this._router.navigate(["/solicitation/step/confirm-values"]);
  }
}
