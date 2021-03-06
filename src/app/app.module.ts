import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddmorefilesComponent } from './add/addmorefiles/addmorefiles.component';
import { BatchDetailsComponent } from './add/batch-details/batch-details.component';
import { CreatebatchComponent } from './add/createbatch/createbatch.component';
import { ErrorComponent } from './add/error/error.component';

import { CarouselDirective } from './directives/carousel.directive';
import { LazyloadDirective } from './directives/lazyload.directive';
import { HomescreenComponent } from './pages/homescreen/homescreen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImagePreview } from './directives/thumbnail.directive';
import { GridComponent } from './grid/grid.component';
import { ViewbatchComponent } from './views/viewbatch/viewbatch.component';
import { PagerComponent } from './views/pager/pager.component';
import { DeleteFilesComponent } from './deletes/delete-files/delete-files.component';
import { DeleteBatchComponent } from './deletes/delete-batch/delete-batch.component';

@NgModule({
  declarations: [
    AppComponent,
    AddmorefilesComponent,
    BatchDetailsComponent,
    CreatebatchComponent,
    ErrorComponent,
    CarouselDirective,
    LazyloadDirective,
    HomescreenComponent,
    NavbarComponent,
    ImagePreview,
    GridComponent,
    ViewbatchComponent,
    PagerComponent,
    DeleteFilesComponent,
    DeleteBatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
