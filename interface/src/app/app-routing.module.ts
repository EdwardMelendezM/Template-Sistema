import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';

const routes: Routes = [
  
  {
    path:'auth',
    loadChildren:()=>import("./auth/auth.module").then(m=>m.AuthModule)
  },
  {
    path: 'system',
    loadChildren: () => import("./system/system.module").then(m => m.SystemModule)
  },
  {
    path: '404',
    component:ErrorPageComponent
  },
  {
    path: '',
    redirectTo:'system',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
