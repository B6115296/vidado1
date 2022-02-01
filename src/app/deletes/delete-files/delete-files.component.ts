import { Component, OnInit,Input,ViewChild,QueryList,AfterViewInit,ViewChildren  } from '@angular/core'; 

import { GridComponent } from '../../grid/grid.component'; 
import { BatchService } from '../../services/batch.service'; 
import { Batch,batchdetail } from '../../services/batch.service'; 
import {Pipe, PipeTransform} from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { 
  FormBuilder, 
  FormGroup, 
  FormArray,
  FormControl, 
  ValidatorFn 
} from '@angular/forms'; 

@Component({ 
  selector: 'app-delete-files', 
  templateUrl: './delete-files.component.html', 
  styleUrls: ['./delete-files.component.scss'] 
}) 

export class DeleteFilesComponent implements OnInit { 

  Array: any= []; 
  isfrmChecked:any; 
  componentMethodName(event: any, isChecked: boolean)  
  { 
    if (isChecked) { 
      this.Array.push(event.target.value) 
    } 
    else { 
      let index = this.Array.indexOf(event.target.value); 
      this.Array.splice(index, 1); 
    } 
  } 

  addFilesToArray(event:any){ 
    this.Array.push(event.target) 
    console.log(this.Array) 
  } 

  //  
  getId: any; 
  public imageCollection:any = []; 
  public url:any; 
  public isLoading:boolean; 

  hideLoader(){ 
    this.isLoading=false; 
  } 

  constructor(private batchservice:BatchService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private formBuilder: FormBuilder) { 
      this.isLoading=true; 
    this.batchitems = null; 
    this.rejectReasons = null 
    this.getId = this.activatedRoute.snapshot.paramMap.get('id') 
    // this.getId =  
    console.log(this.getId) 
   } 

  ngOnInit(): void { 
    this.batch = this.batchservice.getSelectedBatch(this.getId); 
    this.batchitems = this.createRowItems(this.batchservice.getBatchitem(this.getId)); 
    this.rejectReasons = this.batch.reject_reasons 
    console.log(this.batch) 
    console.log(this.batchitems) 
    // console.log(this.batchservice.getBatchitem(this.batch.id)) 
    console.log(this.rejectReasons) 
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
} 