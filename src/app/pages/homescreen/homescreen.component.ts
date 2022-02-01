import { Component, OnInit } from '@angular/core';
import { AddService } from '../../services/add.service';
import { BatchService } from '../../services/batch.service';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})

export class HomescreenComponent implements OnInit {
  constructor(private batchService: BatchService, private addSerive: AddService) {
    // this.batchs = batchService.getAllBatch(); 
    this.addSerive.haveId = false;
  }

  ngOnInit(): void {
    this.batchFilter = this.batchService.batchFilter;
    this.batchs = this.batchService.getAllBatch();
    this.selectedFilter = "ALL"
    console.log(this.batchs, this.batchFilter)
  }
  ngOnChanges() {
    console.log("Hello hOMe")
  }

  allfiles: any = [];
  batchFilter: any = {};
  batchs: any;
  public selectedFilter!: any;
  public valueSelected() {
    console.log(this.selectedFilter)
    if (this.selectedFilter === "None-Rejected") {
      this.batchs = this.batchService.getAllBatch().filter(
        item => item.is_reject_batch == false
      )
    } else if (this.selectedFilter === "Rejected") {
      this.batchs = this.batchService.getAllBatch().filter(
        item => item.is_reject_batch == true
      )
    } else if (this.selectedFilter === "ALL") {
      this.batchs = this.batchService.getAllBatch()
    }
    console.log(this.batchs)
  }

  manageFiles(files: any) {
    console.log(files);
    this.allfiles.push(files);
    console.log(this.allfiles);
  }
  manageFilesError(files: any) {
    console.log(files);
  }
} 