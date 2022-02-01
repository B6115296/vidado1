import { Component, OnInit } from '@angular/core'; 
import { AddService } from '../../services/add.service'; 
@Component({ 
  selector: 'app-error', 
  templateUrl: './error.component.html', 
  styleUrls: ['./error.component.scss'] 
}) 

export class ErrorComponent implements OnInit { 
  public errorcollection:any = []; 
  constructor(private addSerive: AddService) { 
    this.errorcollection = this.addSerive.errorcollection 
   } 
  ngOnInit(): void { 
  } 

  ngDoCheck(){ 
    if(this.addSerive.errorcollection){ 
      this.errorcollection = this.addSerive.errorcollection 
    } 
  } 
} 