import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    DashboardPageComponent,
    SettingsPageComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
