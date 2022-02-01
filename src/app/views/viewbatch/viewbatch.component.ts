import { Component, OnInit,Input,ViewChild,QueryList,AfterViewInit,ViewChildren  } from '@angular/core'; 
import { GridComponent } from '../../grid/grid.component'; 
import { BatchService } from '../../services/batch.service'; 
import { Batch,batchdetail } from '../../services/batch.service'; 
import {Pipe, PipeTransform} from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-viewbatch',
  templateUrl: './viewbatch.component.html',
  styleUrls: ['./viewbatch.component.scss']
})
export class ViewbatchComponent implements OnInit {

  getId: any; 
  public zoombatch!:any; 
  public pageCount:any = []; 

  saveBatchDetail(item:any){ 
    this.resetCount() 
    this.zoombatch = item; 
    for(let i=0;i< this.zoombatch.page_count;i++){ 
      console.log(i); 
      this.pageCount.push(i); 
    } 
    // this.pageCount = this.zoombatch.page_count 
    console.log(this.pageCount) 

  } 

  resetCount(){ 
    this.pageCount = []; 
    console.log(this.pageCount) 

  } 

  constructor(private batchservice:BatchService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router) { 
    this.pendingValue = ""; 
    this.selectedBatch = null; 
    this.batchitems = null; 
    this.rejectReasons = null 
    this.getId = this.activatedRoute.snapshot.paramMap.get('id') 
    console.log(this.getId) 
   } 

  ngOnInit(): void { 
    this.batch = this.batchservice.getSelectedBatch(this.getId); 
    this.batchitems = this.createRowItems(this.batchservice.getBatchitem(this.getId)); 
    this.rejectReasons = this.batch.reject_reasons 
    console.log(this.batch) 
    console.log(this.batchitems) 
    // console.log(this.batchservice.getBatchitem(this.batch.id)) 
    // console.log(this.rejectReasons) 
    // this.setrejectReasons() 
  } 

  public batch:any; 
  public batchitems:any; 
  public rejectReasons:any; 
  public createRowItems(arr:any) { 
    let num:number; 
    if(arr.length % 5==0){ 
      num = (Math.floor(arr.length/5)) 
    }else{ 
      num = (Math.floor(arr.length/5)) + 1 
    } 
    console.log(num); 
    const perGroup = Math.ceil(5); 
    return new Array(num).fill('').map((_,i) => arr.slice(i* perGroup, (i+1) * perGroup)) 
  } 

  // truncate file name 
  public truncatefile(name: string){ 
    const ext: string = name.substring(name.lastIndexOf('.') + 1, name.length).toLowerCase(); 
    let newName: string = name.replace('.' + ext, ''); 
    if (name.length <= 15) { 
      // if file name length is less than 8 do not format 
      // return same name 
      return name; 
    } 
    newName = newName.substring(0, 8) + (name.length > 15 ? '...' : ''); 
    return newName + '.' + ext; 
  } 

  // get image 490w 
  public getSetImage(){ 
    const setItems:any = []; 
  } 

  // public setrejectReasons(){ 
  //   for(let i=0;i<this.rejectReasons.length;i++){ 
  //     if(this.rejectReasons[i] == "could_not_sort"){ 
  //       this.errorShows[i]="Forms did not match any templates. Review your forms and make sure there is an active template that matches this Form."
  //     }else if(this.rejectReasons[i] == "junk"){ 
  //       this.errorShows[i]="junk" 
  //     } 
  //     // this.errorShows[i] =this.rejectReasons[i] 
  //   } 
  //   console.log(this.errorShows) 
  // } 

  // part rename 
  public pendingValue: string; 
  public selectedBatch: Batch | null; 
  public cancel() : void { 
    this.selectedBatch = null; 
  } 
  
  public edit( batchs: Batch ) : void { 
    this.pendingValue = batchs.name; 
    this.selectedBatch = batchs; 
    console.log(this.selectedBatch) 
  } 

  public processChanges() : void {
    if ( this.pendingValue !== this.selectedBatch!.name ) { 
    this.selectedBatch!.name = this.pendingValue; 
    } 
    this.selectedBatch = null; 
  } 
} 