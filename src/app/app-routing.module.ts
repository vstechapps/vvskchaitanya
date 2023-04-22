import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"iam",loadChildren: () => import('./iam/iam.module').then(m => m.IamModule)},
  {path:"ecm",loadChildren: () => import('./ecm/ecm.module').then(m => m.EcmModule)},
  {path:"bpm",loadChildren: () => import('./bpm/bpm.module').then(m => m.BpmModule)},
  {path:"mdm",loadChildren: () => import('./mdm/mdm.module').then(m => m.MdmModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
