
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators'

import { Observable, throwError } from 'rxjs';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

export interface Batch {
  ids?: number
  id: number;
  name: string;
  file_count: number;
  last_upload_date: string;
  created_by: string;
  last_uploaded_with: string;
  status: string;
  is_digitized: boolean;
  is_reject_batch: boolean;
  is_sorting_only: boolean;
  sorting_enabled: boolean;
  actionable: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  REST_API: String = 'https://shreddr.captricity.com/api/v1'
  httpHeaders = new HttpHeaders().set('Content-type', 'application/json');
  constructor(private httpClient: HttpClient) { }
  getAllBatch() {
    return this.batchs;
  }
  getSelectedBatch(getid: any) {
    // console.log(batchselected) 
    // console.log(batchselected.find(( item => item.id == getid))) 
    const batchss = batchselected.find((item => item.id == getid))
    return batchss;
  }
  getBatchitem(getid: any) {
    console.log(getid)
    const items = batchdetail.filter((item => item.batch.id == getid))
    console.log(items)
    return items;
  }

  batchFilter = ["ALL", "Rejected"];
  public batchs: Batch[] = [
    {
      "name": "New Batch",
      "is_digitized": false,
      "is_sorting_only": false,
      "is_reject_batch": true,
      "status": "rejected",
      "created_by": "Wimlak Jantrasut",
      "sorting_enabled": false,
      "last_uploaded_with": "webapp",
      "file_count": 2,
      "last_upload_date": "2021-12-22T18:19:12.928",
      "id": 18342146,
      "actionable": true,
    },

    {

      "name": "New Batch2",

      "is_digitized": false,

      "is_sorting_only": false,

      "is_reject_batch": false,

      "status": "setup",

      "created_by": "Wimlak Jantrasut",

      "sorting_enabled": false,

      "last_uploaded_with": "webapp",

      "file_count": 2,

      "last_upload_date": "2021-12-22T18:19:12.928",

      "id": 18342147,

      "actionable": true,

    },

    {

      "name": "New Batch3",

      "is_digitized": false,

      "is_sorting_only": false,

      "is_reject_batch": false,

      "status": "sorting",

      "created_by": "Wimlak Jantrasut",

      "sorting_enabled": false,

      "last_uploaded_with": "webapp",

      "file_count": 2,

      "last_upload_date": "2021-12-22T18:19:12.928",

      "id": 18342148,

      "actionable": true,

    },

    {

      "name": "New Batch4",

      "is_digitized": false,

      "is_sorting_only": false,

      "is_reject_batch": false,

      "status": "sorting",

      "created_by": "Wimlak Jantrasut",

      "sorting_enabled": false,

      "last_uploaded_with": "webapp",

      "file_count": 2,

      "last_upload_date": "2021-12-22T18:19:12.928",

      "id": 18342149,

      "actionable": true,

    },

    {

      "name": "New Batch5",

      "is_digitized": false,

      "is_sorting_only": false,

      "is_reject_batch": true,

      "status": "rejected",

      "created_by": "Wimlak Jantrasut",

      "sorting_enabled": false,

      "last_uploaded_with": "webapp",

      "file_count": 2,

      "last_upload_date": "2021-12-22T18:19:12.928",

      "id": 18342150,

      "actionable": true,

    },

  ]




  // Get all objects 

  GetBatchs() {

    return this.httpClient.get(`https://shreddr.captricity.com/inbox/`);

  }




  // Get single object 

  GetBatch(id: any): Observable<any> {

    let API_URL = `${this.REST_API}/batch/${id}`;

    return this.httpClient.get(API_URL, { headers: this.httpHeaders })

      .pipe(map((res: any) => {

        return res || {}

      }),

        catchError(this.handleError)

      )

  }




  // Update Batch 

  updateBatch(id: any, data: any): Observable<any> {

    let API_URL = `${this.REST_API}/batch/${id}`;

    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })

      .pipe(

        catchError(this.handleError)

      )

  }




  // Delete 

  deleteBatch(id: any): Observable<any> {

    let API_URL = `${this.REST_API}/batch/${id}`;

    return this.httpClient.put(API_URL, { headers: this.httpHeaders })

      .pipe(

        catchError(this.handleError)

      )

  }




  handleError(error: HttpErrorResponse) {

    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {

      // Handle client error 

      errorMessage = error.error.message;

    } else {

      // Handle server error 

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }

    console.log(errorMessage);

    return throwError(errorMessage);

  }




  batch_list = [

    {

      "created": "2021-12-22T18:17:07.387",

      "name": "New Batch",

      "submitted": null,

      "content_created": null,

      "is_digitized": false,

      "is_sorting_only": false,

      "is_reject_batch": false,

      "status": "rejected",

      "emailed_by": "",

      "created_with": "auto",

      "documents": [],

      "templates": [],

      "last_emailed_by": "",

      "created_by": "Wimlak Jantrasut",

      "parent_id": null,

      "sorting_enabled": false,

      "last_uploaded_with": "webapp",

      "children_ids": [],

      "reject_reasons": [],

      "file_count": 2,

      "last_upload_date": "2021-12-22T18:19:12.928",

      "last_uploader": "Wimlak Jantrasut",

      "related_job_id": null,

      "id": 314680409,

      "user_id": 39360,

      "actionable": true,

      "job_ids": []

    },

    {

      "created": "2021-12-22T18:17:07.387",

      "name": "New Batch",

      "submitted": null,

      "content_created": null,

      "is_digitized": false,

      "is_sorting_only": false,

      "is_reject_batch": false,

      "status": "setup",

      "emailed_by": "",

      "created_with": "auto",

      "documents": [],

      "templates": [],

      "last_emailed_by": "",

      "created_by": "Teerapat Saiprom",

      "parent_id": null,

      "sorting_enabled": false,

      "last_uploaded_with": "webapp",

      "children_ids": [],

      "reject_reasons": [],

      "file_count": 2,

      "last_upload_date": "2021-12-22T18:19:12.928",

      "last_uploader": "Wimlak Jantrasut",

      "related_job_id": null,

      "id": 314680410,

      "user_id": 39360,

      "actionable": true,

      "job_ids": []

    },



  ]

}




export const batchselected = [

  {

    "created": "2022-01-17T00:43:20.227",

    "name": "New batch",

    "submitted": null,

    "content_created": null,

    "is_digitized": false,

    "is_sorting_only": true,

    "is_reject_batch": true,

    "status": "rejected",

    "emailed_by": "",

    "created_with": "auto",

    "documents": [],

    "templates": [],

    "last_emailed_by": "",

    "id": 18342146,

    "related_job_id": null,

    "last_upload_date": "2022-01-17T00:43:36.138",

    "reject_reasons": [

      "could_not_sort",

      "junk"

    ],

    "last_uploader": "Wimlak Jantrasut",

    "children_ids": [],

    "sorting_enabled": false,

    "file_count": 2,

    "created_by": "SSC BPO Dev",

    "actionable": true,

    "user_id": 39360,

    "parent_id": 18342808,

    "last_uploaded_with": "webapp",

    "job_ids": []

  },

  {

    "created": "2022-01-17T00:43:20.227",

    "name": "New batch2",

    "submitted": null,

    "content_created": null,

    "is_digitized": false,

    "is_sorting_only": true,

    "is_reject_batch": true,

    "status": "setup",

    "emailed_by": "",

    "created_with": "auto",

    "documents": [],

    "templates": [],

    "last_emailed_by": "",

    "id": 18342147,

    "related_job_id": null,

    "last_upload_date": "2022-01-17T00:43:36.138",

    "reject_reasons": [

    ],

    "last_uploader": "Teerapat Saiprom",

    "children_ids": [],

    "sorting_enabled": false,

    "file_count": 2,

    "created_by": "SSC BPO Dev",

    "actionable": true,

    "user_id": 39360,

    "parent_id": 18342808,

    "last_uploaded_with": "webapp",

    "job_ids": []

  },

  {

    "created": "2022-01-17T00:43:20.227",

    "name": "New batch3",

    "submitted": null,

    "content_created": null,

    "is_digitized": false,

    "is_sorting_only": true,

    "is_reject_batch": true,

    "status": "sorting",

    "emailed_by": "",

    "created_with": "auto",

    "documents": [],

    "templates": [],

    "last_emailed_by": "",

    "id": 18342148,

    "related_job_id": null,

    "last_upload_date": "2022-01-17T00:43:36.138",

    "reject_reasons": [

    ],

    "last_uploader": "Teerapat Saiprom",

    "children_ids": [],

    "sorting_enabled": false,

    "file_count": 2,

    "created_by": "SSC BPO Dev",

    "actionable": true,

    "user_id": 39360,

    "parent_id": 18342808,

    "last_uploaded_with": "webapp",

    "job_ids": []

  }

]





export const batchdetail = [

  {

    "created": "2022-01-16T20:24:10.658",

    "uuid": "f7654e29-17a3-4bae-84c1-4ba3d667d543",

    "batch": {

      "created": "2022-01-13T00:20:50.442",

      "name": "New Batch - Rejected",

      "submitted": null,

      "content_created": null,

      "is_digitized": false,

      "is_sorting_only": true,

      "is_reject_batch": true,

      "status": "rejected",

      "emailed_by": "",

      "created_with": "auto",

      "documents": [],

      "templates": [],

      "last_uploaded_with": "webapp",

      "children_ids": [],

      "user_id": 39360,

      "job_ids": [],

      "parent_id": 18311062,

      "reject_reasons": [],

      "last_upload_date": "2022-01-16T20:25:59.782",

      "last_emailed_by": "",

      "actionable": true,

      "id": 18342146,

      "created_by": "SSC BPO Dev",

      "file_count": 6,

      "sorting_enabled": false,

      "related_job_id": null,

      "last_uploader": "Wimlak Jantrasut"

    },

    "file_name": "Test 3b (2).pdf",

    "page_count": 5,

    "emailed_by": "",

    "uploaded_with": "webapp",

    "reject_reason": "",

    "metadata": {},

    "id": 314494250,

    "uploaded_by": "Teerapat Saiprom"

  },

  {

    "created": "2022-01-16T20:25:59.782",

    "uuid": "7dffd1f4-9b19-41ba-a84d-01f4ce63b3dc",

    "batch": {

      "created": "2022-01-13T00:20:50.442",

      "name": "New Batch - Rejected",

      "submitted": null,

      "content_created": null,

      "is_digitized": false,

      "is_sorting_only": true,

      "is_reject_batch": true,

      "status": "rejected",

      "emailed_by": "",

      "created_with": "auto",

      "documents": [],

      "templates": [],

      "last_uploaded_with": "webapp",

      "children_ids": [],

      "user_id": 39360,

      "job_ids": [],

      "parent_id": 18311062,

      "reject_reasons": [],

      "last_upload_date": "2022-01-16T20:25:59.782",

      "last_emailed_by": "",

      "actionable": true,

      "id": 18342146,

      "created_by": "SSC BPO Dev",

      "file_count": 6,

      "sorting_enabled": false,

      "related_job_id": null,

      "last_uploader": "Wimlak Jantrasut"

    },

    "file_name": "france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",

    "page_count": 1,

    "emailed_by": "",

    "uploaded_with": "webapp",

    "reject_reason": "",

    "metadata": {},

    "id": 314494251,

    "uploaded_by": "Wimlak Jantrasut"

  }

  ,

  {

    "created": "2022-01-16T20:24:10.658",

    "uuid": "f7654e29-17a3-4bae-84c1-4ba3d667d543",

    "batch": {

      "created": "2022-01-13T00:20:50.442",

      "name": "New Batch - Rejected",

      "submitted": null,

      "content_created": null,

      "is_digitized": false,

      "is_sorting_only": true,

      "is_reject_batch": true,

      "status": "rejected",

      "emailed_by": "",

      "created_with": "auto",

      "documents": [],

      "templates": [],

      "last_uploaded_with": "webapp",

      "children_ids": [],

      "user_id": 39360,

      "job_ids": [],

      "parent_id": 18311062,

      "reject_reasons": [],

      "last_upload_date": "2022-01-16T20:25:59.782",

      "last_emailed_by": "",

      "actionable": true,

      "id": 18342146,

      "created_by": "SSC BPO Dev",

      "file_count": 6,

      "sorting_enabled": false,

      "related_job_id": null,

      "last_uploader": "Wimlak Jantrasut"

    },

    "file_name": "Test 3b (2).pdf",

    "page_count": 5,

    "emailed_by": "",

    "uploaded_with": "webapp",

    "reject_reason": "could_not_sort",

    "metadata": {},

    "id": 314494252,

    "uploaded_by": "Wimlak Jantrasut"

  },

  {

    "created": "2022-01-16T20:25:59.782",

    "uuid": "7dffd1f4-9b19-41ba-a84d-01f4ce63b3dc",

    "batch": {

      "created": "2022-01-13T00:20:50.442",

      "name": "New Batch - Rejected",

      "submitted": null,

      "content_created": null,

      "is_digitized": false,

      "is_sorting_only": true,

      "is_reject_batch": true,

      "status": "rejected",

      "emailed_by": "",

      "created_with": "auto",

      "documents": [],

      "templates": [],

      "last_uploaded_with": "webapp",

      "children_ids": [],

      "user_id": 39360,

      "job_ids": [],

      "parent_id": 18311062,

      "reject_reasons": [],

      "last_upload_date": "2022-01-16T20:25:59.782",

      "last_emailed_by": "",

      "actionable": true,

      "id": 18342146,

      "created_by": "SSC BPO Dev",

      "file_count": 2,

      "sorting_enabled": false,

      "related_job_id": null,

      "last_uploader": "Wimlak Jantrasut"

    },

    "file_name": "france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",

    "page_count": 1,

    "emailed_by": "",

    "uploaded_with": "webapp",

    "reject_reason": "junk",

    "metadata": {},

    "id": 314494253,

    "uploaded_by": "Wimlak Jantrasut"

  }

  ,

  {

    "created": "2022-01-16T20:24:10.658",

    "uuid": "f7654e29-17a3-4bae-84c1-4ba3d667d543",

    "batch": {

      "created": "2022-01-13T00:20:50.442",

      "name": "New Batch - Rejected",

      "submitted": null,

      "content_created": null,

      "is_digitized": false,

      "is_sorting_only": true,

      "is_reject_batch": true,

      "status": "rejected",

      "emailed_by": "",

      "created_with": "auto",

      "documents": [],

      "templates": [],

      "last_uploaded_with": "webapp",

      "children_ids": [],

      "user_id": 39360,

      "job_ids": [],

      "parent_id": 18311062,

      "reject_reasons": [],

      "last_upload_date": "2022-01-16T20:25:59.782",

      "last_emailed_by": "",

      "actionable": true,

      "id": 18342146,

      "created_by": "SSC BPO Dev",

      "file_count": 2,

      "sorting_enabled": false,

      "related_job_id": null,

      "last_uploader": "Wimlak Jantrasut"

    },

    "file_name": "Test 3b (2).pdf",

    "page_count": 5,

    "emailed_by": "",

    "uploaded_with": "webapp",

    "reject_reason": "",

    "metadata": {},

    "id": 314494254,

    "uploaded_by": "Wimlak Jantrasut"

  },

  {

    "created": "2022-01-16T20:25:59.782",

    "uuid": "7dffd1f4-9b19-41ba-a84d-01f4ce63b3dc",

    "batch": {

      "created": "2022-01-13T00:20:50.442",

      "name": "New Batch - Rejected",

      "submitted": null,

      "content_created": null,

      "is_digitized": false,

      "is_sorting_only": true,

      "is_reject_batch": true,

      "status": "rejected",

      "emailed_by": "",

      "created_with": "auto",

      "documents": [],

      "templates": [],

      "last_uploaded_with": "webapp",

      "children_ids": [],

      "user_id": 39360,

      "job_ids": [],

      "parent_id": 18311062,

      "reject_reasons": [],

      "last_upload_date": "2022-01-16T20:25:59.782",

      "last_emailed_by": "",

      "actionable": true,

      "id": 18342146,

      "created_by": "SSC BPO Dev",

      "file_count": 2,

      "sorting_enabled": false,

      "related_job_id": null,

      "last_uploader": "Wimlak Jantrasut"

    },

    "file_name": "france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",

    "page_count": 1,

    "emailed_by": "",

    "uploaded_with": "webapp",

    "reject_reason": "",

    "metadata": {},

    "id": 314494255,

    "uploaded_by": "Wimlak Jantrasut"

  }

  ,



  // part 2 

  {

    "created": "2022-01-16T20:24:10.658",

    "uuid": "f7654e29-17a3-4bae-84c1-4ba3d667d543",

    "batch": {

      "created": "2022-01-13T00:20:50.442",

      "name": "New Batch - Rejected",

      "submitted": null,

      "content_created": null,

      "is_digitized": false,

      "is_sorting_only": true,

      "is_reject_batch": true,

      "status": "rejected",

      "emailed_by": "",

      "created_with": "auto",

      "documents": [],

      "templates": [],

      "last_uploaded_with": "webapp",

      "children_ids": [],

      "user_id": 39360,

      "job_ids": [],

      "parent_id": 18311062,

      "reject_reasons": [],

      "last_upload_date": "2022-01-16T20:25:59.782",

      "last_emailed_by": "",

      "actionable": true,

      "id": 18342147,

      "created_by": "SSC BPO Dev",

      "file_count": 2,

      "sorting_enabled": false,

      "related_job_id": null,

      "last_uploader": "Wimlak Jantrasut"

    },

    "file_name": "Test 3b (2).pdf",

    "page_count": 5,

    "emailed_by": "",

    "uploaded_with": "webapp",

    "reject_reason": "",

    "metadata": {},

    "id": 314680410,

    "uploaded_by": "Teerapat Saiprom"

  },

  {

    "created": "2022-01-16T20:25:59.782",

    "uuid": "7dffd1f4-9b19-41ba-a84d-01f4ce63b3dc",

    "batch": {

      "created": "2022-01-13T00:20:50.442",

      "name": "New Batch - Rejected",

      "submitted": null,

      "content_created": null,

      "is_digitized": false,

      "is_sorting_only": true,

      "is_reject_batch": true,

      "status": "rejected",

      "emailed_by": "",

      "created_with": "auto",

      "documents": [],

      "templates": [],

      "last_uploaded_with": "webapp",

      "children_ids": [],

      "user_id": 39360,

      "job_ids": [],

      "parent_id": 18311062,

      "reject_reasons": [],

      "last_upload_date": "2022-01-16T20:25:59.782",

      "last_emailed_by": "",

      "actionable": true,

      "id": 18342147,

      "created_by": "SSC BPO Dev",

      "file_count": 2,

      "sorting_enabled": false,

      "related_job_id": null,

      "last_uploader": "Wimlak Jantrasut"

    },

    "file_name": "france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",

    "page_count": 1,

    "emailed_by": "",

    "uploaded_with": "webapp",

    "reject_reason": "",

    "metadata": {},

    "id": 314680411,

    "uploaded_by": "Wimlak Jantrasut"

  }

  ,

  {

    "created": "2022-01-16T20:24:10.658",

    "uuid": "f7654e29-17a3-4bae-84c1-4ba3d667d543",

    "batch": {

      "created": "2022-01-13T00:20:50.442",

      "name": "New Batch - Rejected",

      "submitted": null,

      "content_created": null,

      "is_digitized": false,

      "is_sorting_only": true,

      "is_reject_batch": true,

      "status": "rejected",

      "emailed_by": "",

      "created_with": "auto",

      "documents": [],

      "templates": [],

      "last_uploaded_with": "webapp",

      "children_ids": [],

      "user_id": 39360,

      "job_ids": [],

      "parent_id": 18311062,

      "reject_reasons": [],

      "last_upload_date": "2022-01-16T20:25:59.782",

      "last_emailed_by": "",

      "actionable": true,

      "id": 18342147,

      "created_by": "SSC BPO Dev",

      "file_count": 2,

      "sorting_enabled": false,

      "related_job_id": null,

      "last_uploader": "Wimlak Jantrasut"

    },

    "file_name": "Test 3b (2).pdf",

    "page_count": 5,

    "emailed_by": "",

    "uploaded_with": "webapp",

    "reject_reason": "",

    "metadata": {},

    "id": 314680412,

    "uploaded_by": "Wimlak Jantrasut"

  },

  {

    "created": "2022-01-16T20:25:59.782",

    "uuid": "7dffd1f4-9b19-41ba-a84d-01f4ce63b3dc",

    "batch": {

      "created": "2022-01-13T00:20:50.442",

      "name": "New Batch - Rejected",

      "submitted": null,

      "content_created": null,

      "is_digitized": false,

      "is_sorting_only": true,

      "is_reject_batch": true,

      "status": "rejected",

      "emailed_by": "",

      "created_with": "auto",

      "documents": [],

      "templates": [],

      "last_uploaded_with": "webapp",

      "children_ids": [],

      "user_id": 39360,

      "job_ids": [],

      "parent_id": 18311062,

      "reject_reasons": [],

      "last_upload_date": "2022-01-16T20:25:59.782",

      "last_emailed_by": "",

      "actionable": true,

      "id": 18342147,

      "created_by": "SSC BPO Dev",

      "file_count": 2,

      "sorting_enabled": false,

      "related_job_id": null,

      "last_uploader": "Wimlak Jantrasut"

    },

    "file_name": "france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",

    "page_count": 1,

    "emailed_by": "",

    "uploaded_with": "webapp",

    "reject_reason": "",

    "metadata": {},

    "id": 314680413,

    "uploaded_by": "Wimlak Jantrasut"

  }

  ,

  {

    "created": "2022-01-16T20:24:10.658",

    "uuid": "f7654e29-17a3-4bae-84c1-4ba3d667d543",

    "batch": {

      "created": "2022-01-13T00:20:50.442",

      "name": "New Batch - Rejected",

      "submitted": null,

      "content_created": null,

      "is_digitized": false,

      "is_sorting_only": true,

      "is_reject_batch": true,

      "status": "rejected",

      "emailed_by": "",

      "created_with": "auto",

      "documents": [],

      "templates": [],

      "last_uploaded_with": "webapp",

      "children_ids": [],

      "user_id": 39360,

      "job_ids": [],

      "parent_id": 18311062,

      "reject_reasons": [],

      "last_upload_date": "2022-01-16T20:25:59.782",

      "last_emailed_by": "",

      "actionable": true,

      "id": 18342147,

      "created_by": "SSC BPO Dev",

      "file_count": 2,

      "sorting_enabled": false,

      "related_job_id": null,

      "last_uploader": "Wimlak Jantrasut"

    },

    "file_name": "Test 3b (2).pdf",

    "page_count": 5,

    "emailed_by": "",

    "uploaded_with": "webapp",

    "reject_reason": "",

    "metadata": {},

    "id": 314680414,

    "uploaded_by": "Wimlak Jantrasut"

  },

  {

    "created": "2022-01-16T20:25:59.782",

    "uuid": "7dffd1f4-9b19-41ba-a84d-01f4ce63b3dc",

    "batch": {

      "created": "2022-01-13T00:20:50.442",

      "name": "New Batch - Rejected",

      "submitted": null,

      "content_created": null,

      "is_digitized": false,

      "is_sorting_only": true,

      "is_reject_batch": true,

      "status": "rejected",

      "emailed_by": "",

      "created_with": "auto",

      "documents": [],

      "templates": [],

      "last_uploaded_with": "webapp",

      "children_ids": [],

      "user_id": 39360,

      "job_ids": [],

      "parent_id": 18311062,

      "reject_reasons": [],

      "last_upload_date": "2022-01-16T20:25:59.782",

      "last_emailed_by": "",

      "actionable": true,

      "id": 18342147,

      "created_by": "SSC BPO Dev",

      "file_count": 2,

      "sorting_enabled": false,

      "related_job_id": null,

      "last_uploader": "Wimlak Jantrasut"

    },

    "file_name": "france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",

    "page_count": 1,

    "emailed_by": "",

    "uploaded_with": "webapp",

    "reject_reason": "",

    "metadata": {},

    "id": 314680415,

    "uploaded_by": "Wimlak Jantrasut"

  }

  ,

]
