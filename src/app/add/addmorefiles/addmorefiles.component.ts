import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  SimpleChanges,
} from "@angular/core";

import { FormControl, FormGroup } from "@angular/forms";
import { CreatebatchComponent } from "../createbatch/createbatch.component";
import { AddService } from "../../services/add.service";
import { Router, RouterLink } from "@angular/router";
import { BatchService } from "../../services/batch.service";

@Component({
  selector: "app-addmorefiles",
  templateUrl: "./addmorefiles.component.html",
  styleUrls: ["./addmorefiles.component.scss"],
})
export class AddmorefilesComponent implements OnInit {
  constructor(
    private addService: AddService,
    private router: Router,
    private tableService: BatchService
  ) {}

  @ViewChild(CreatebatchComponent) createbatchComponent: any;
  public uploader: any = [];
  public batchId: any;
  public batch: any = [];
  public lastFiveFiles: any = [];
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.uploader);
  }

  ngDoCheck() {
    if (this.addService.files) {
      this.uploader = this.addService.files;
      this.batchId = this.addService.batchId;
      // this.batch = this.addService.batch.value
      // console.log(this.addService.files)
    }
    if (this.addService.batch) {
      this.batch = this.addService.batch;
    }

    console.log(this.batch);
  }

  show() {
    // this.uploader = this.createbatchComponent.sendFileUpload().queue
    console.log(this.uploader);
    // this.router.navigateByUrl('/home');
    this.addService.files = [];
    this.addService.batch = [];
    this.addService.errorcollection = [];
    this.addService.batch = [];
    this.addService.files = [];
    this.addService.haveId = false;
    this.addService.batchId = "";
  }
}
