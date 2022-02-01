import { Component, OnInit, Input } from "@angular/core";
@Component({
  selector: "app-batch-details",
  templateUrl: "./batch-details.component.html",
  styleUrls: ["./batch-details.component.scss"],
})
export class BatchDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(this.batch);
  }

  @Input() batch: any = [];
}
