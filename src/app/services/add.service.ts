import { Injectable, SimpleChanges } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AddService {
  constructor() {}
  public batch: any;
  public files: any = [];
  public uploader: any = [];
  public haveId: boolean = false;
  public errorcollection: any = [];
  public batchId: any;
  
  
  ngOnchanges() {}
  
  ngOnInit() {}
}
