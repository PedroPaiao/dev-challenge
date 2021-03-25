import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StepsService } from "src/app/shared/services/steps.service";

export interface PeriodicElement {
  price: string;
  installmentsCount: String;
  tax: String;
  lastDate: String;
}

@Component({
  selector: "confirm-values",
  templateUrl: "./confirm-values.component.html",
  host: {
    class: "step-card"
  }
})
export class ConfirmValuesComponent implements OnInit {
  displayedColumns: string[] = ['price', 'installmentsCount', 'tax', 'lastDate'];
  dataSource: PeriodicElement[];
  params
  constructor(
    private _router: Router,
    private _stepsService: StepsService
  ) {}

  ngOnInit(): void {
    this.params = this._stepsService.getParams();
    if(this.params) {
      console.log(this.params)
      let data = {
        price: this.params.price,
        installmentsCount: String(this.params.installmentsCount),
        tax: this.params.tax,
        lastDate: 'this.params.price',
      }
      this.dataSource = [data]
    } else {
      this.backToHome()
    }
  }

  backToHome(): void {
    this._router.navigate(["/home"]);
  }

  confirmDatas() {
    this._router.navigate(["/home"]);
  }

  openInstallments(){}
}
