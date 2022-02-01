import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { BatchService } from '../services/batch.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Batch } from '../services/batch.service';
import * as moment from 'moment';

@Component({
  selector: 'app-grid',
  inputs: ["batchs"],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  
  constructor(private batchservice: BatchService) {
    // this.TableData = this.getAllBatch(); 
    this.pendingValue = "";
    this.date = "";
    this.selectedBatch = null;
    // this.refreshCountries(); 
    this.pageIndex = 0;
    this.pageSize = 2;
  }

  public sendBatch: any;
  saveSelectedBatch(batch: any) {
    console.log(batch)
    return batch;
  }

  showTime(str1: any) {
    let str = str1
    let date = moment(str);
    this.date = date.format('lll');
    // console.log(date) 
    return date
  }

  ngOnInit(): void {
    console.log(this.batchs)
    // this.showTime("2021-12-22T18:19:12.928") 
    // this.batches= this.batchs 
  }

  // Edit batch name 
  public date: string;
  public statusBatch!: boolean;
  public pendingValue: string;
  public batchs!: Batch[];
  public selectedBatch: Batch | null;

  public cancel(): void {
    this.selectedBatch = null;
  }

  public edit(batchs: Batch): void {
    this.pendingValue = batchs.name;
    this.selectedBatch = batchs;
    console.log(this.selectedBatch)
  }
  
  public processChanges(): void {
    if (this.pendingValue !== this.selectedBatch!.name) {
      this.selectedBatch!.name = this.pendingValue;
    }
    this.selectedBatch = null;
  }

  // pagination 
  public p = 1;
  pageIndex: number;
  pageSize: number;

  delete(id: any, i: any) {
    console.log(id)
    if (window.confirm('Do you want to go ahead?')) {
      this.batchservice.deleteBatch(id).subscribe((res:any) => {
        this.batchs.splice(i, 1);
      })
    }
  }

  // Batchs:any = []; 
  // TableData: any = []; 
  // // ShowEditTable: boolean = false; 
  // EditRowID: any = ''; 

  // ngOnInit(): void { 
  //   this.batchservice.GetBatchs().subscribe(res => { 
  //     console.log(res) 
  //     this.Batchs = res; 
  //   }) 
  // } 

  // getAllBatch(){ 
  //   console.log(this.batchservice.getAllBatch()) 
  //   return this.batchservice.getAllBatch() 
  // } 

  // onUpdate(id:any, name:any):any { 
  //   console.log(name) 
  //   this.batchservice.updateBatch(id, name).subscribe(()=>{ 
  //   }, (err) => { 
  //     console.log(err); 
  //   }) 
  // } 

  // Edit(val:any){ 
  //   this.EditRowID = val; 
  // } 
}

const FILTER_PAG_REGEX = /[^0-9]/g;


