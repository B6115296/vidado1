import { Component, OnInit,SimpleChanges,AfterViewChecked,ViewChild,ElementRef, Input } from '@angular/core'; 
import { FormControl, FormGroup } from '@angular/forms'; 
import { AddService } from '../../services/add.service'; 
import { Router, RouterLink } from '@angular/router'; 
import { FileUploader,FileDropDirective } from 'ng2-file-upload'; 
import { BatchService } from '../../services/batch.service'; 
@Component({ 
  selector: 'app-createbatch', 
  templateUrl: './createbatch.component.html', 
  styleUrls: ['./createbatch.component.scss'] 
}) 

export class CreatebatchComponent implements OnInit{ 
  constructor(private addService:AddService,private router: Router, private tableSerive: BatchService) { 
   } 

  @ViewChild('modalcreatebatch', {static : true}) myModal!:ElementRef; 
  // @Input() haveId:any 
  public uploadedFile:any = []; 

  public batch = new FormGroup({ 
    created: new FormControl(''), 
    name: new FormControl('New Batch'), 
    submitted: new FormControl(null), 
    content_created: new FormControl(null), 
    is_digitized: new FormControl(false), 
    is_sorting_only: new FormControl(false), 
    is_reject_batch: new FormControl(false), 
    status: new FormControl("setup"), 
    emailed_by: new FormControl(""), 
    created_with: new FormControl("auto"), 
    documents:new FormControl([]), 
    templates: new FormControl([]), 
    releated_job_id: new FormControl(null), 
    user_id: new FormControl(Number), 
    last_uploaded_with: new FormControl(null), 
    sorting_enabled: new FormControl(false), 
    reject_reasons: new FormControl([]), 
    last_emailed_by: new FormControl(null), 
    file_count: new FormControl(0), 
    parent_id: new FormControl(null), 
    last_upload_date: new FormControl(null), 
    created_by: new FormControl(""), 
    job_ids: new FormControl([]), 
    children_ids:new FormControl([]), 
    actionable: new FormControl(true), 
    last_uploader: new FormControl(null), 
    id: new FormControl(Number), 
  }); 


  onSubmit(){ 
    // console.log(this.createBatch()) 
    this.addService.files = []; 
    this.addService.batch = []; 
    this.addService.errorcollection = []; 
    this.addService.batch = []; 
    this.addService.files = []; 
    this.addService.haveId = false; 
    this.addService.batchId = ""; 
    this.addService.batch = this.createBatch() 
    this.addService.haveId = true 
    // this.addservice.files = this.uploader.queue 
    this.addService.uploader = this.uploader 
    this.addService.batchId = this.batchId 
    this.router.navigateByUrl(`/inbox/batch/${18342147}/add`); 
    console.log(this.uploader.queue) 
    console.log(this.haveId) 
    // console.log(this.createBatch()) 
    // console.log(this.uploader) 
      this.uploader.uploadAll() 
  } 


  createBatch(){
    // api https://shreddr.captricity.com/api/v1/batch/ and recieve batchId 
    let batchIdTest = 18560190 
    this.haveId = true; 
    return this.tableSerive.getSelectedBatch(18342147) 
  } 

  sendFileUpload(){ 
    return this.uploader 
  } 
  
  public haveId = this.addService.haveId; 
  public batchId:number = 18342146 
  // public haveId = this.addservice.haveId 
  url = `https://shreddr.captricity.com/api/v1/batch/${this.batchId}/batch-file/`; 
  response!:string; 
  public uploader = new FileUploader({ 
    url: this.url, 
    removeAfterUpload: false, 
    itemAlias: "uploaded_file", 
    additionalParameter: { uploaded_with: "webapp" }, 
    allowedFileType: ['image', 'pdf', 'tiff' ,'gif'], 
  }); 

  ngOnInit() { 
    if(this.addService.haveId){ 
      for(let i=0;i<this.addService.uploader.queue.length;i++){ 
        console.log(i) 
        this.uploader.queue[i] = this.addService.uploader.queue[i] 
      } 
      console.log(this.uploader.queue) 
    }
    this.uploader.onAfterAddingFile = (file) => { 
      console.log('***** onAfterAddingFile ******'); 
      console.log('file ', file); 
    }; 
    this.uploader.onAfterAddingAll = (fileItems) => { 
      if(this.haveId == false){ 
        this.myModal.nativeElement.click(); 
        this.haveId = true; 
        console.log(this.haveId) 
      }else{ 
        this.uploader.uploadAll() 
        // this.addservice.files = this.uploader.queue 
      } 
      console.log('finish') 
      console.log(this.uploader); 
    } 

    this.uploader.onBeforeUploadItem = (fileItem: any) => { 
      this.addService.files.push(fileItem) 
    }
    this.uploader.onCompleteItem = ( 
      item: any, 
      response: any, 
      status: any, 
      headers: any 
    ) => { 
      console.log('ImageUpload:uploaded:', item, status, response); 
    }; 
    this.uploader.onCompleteAll = () => { 
      console.log('******* onCompleteAll *********'); 
      console.log(this.uploader) 
      console.log(this.haveId) 
    }; 
    this.uploader.onWhenAddingFileFailed = ( 
      item: any, 
      filter: any, 
      options: any 
    ) => {
      console.log('***** onWhenAddingFileFailed ********'); 
      this.addService.errorcollection.push(`${item.name} - We currently only support PNG, TIFF, GIF, JPG, and PDF files.`) 
      console.log(this.uploader.queue); 
      console.log(this.addService.errorcollection) 
    }; 

    this.uploader.onErrorItem = (item: any, response: any, status: any, headers: any) => { 
      console.log("WTF this file have already") 
    } 
  } 

  clearFiles(){ 
    this.uploader.queue = []; 
    this.haveId = false; 
    console.log(this.uploader.queue) 
  } 

  // showModal(){ 
  //   setTimeout(() =>{ 
  //     this.myModal.nativeElement.click(); 
  //   }, 1000) 
  // } 
}