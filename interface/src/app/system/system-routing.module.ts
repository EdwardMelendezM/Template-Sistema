import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
  {
    path:"",
    component: LayoutPageComponent,
    children:[
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'setting', component: SettingsPageComponent },
      { path: '**', redirectTo:"dashboard" },
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
