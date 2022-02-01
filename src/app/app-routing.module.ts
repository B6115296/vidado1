import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmorefilesComponent } from './add/addmorefiles/addmorefiles.component';
import { CreatebatchComponent } from './add/createbatch/createbatch.component';
import { HomescreenComponent } from './pages/homescreen/homescreen.component';
import { ViewbatchComponent } from './views/viewbatch/viewbatch.component';

const routes: Routes = [
  {path: '' ,pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomescreenComponent},
  {path: 'create', component: CreatebatchComponent},
  {path: 'inbox/batch/:id/add', component: AddmorefilesComponent},
  {path: 'inbox/views/:id', component: ViewbatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
