import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { SystemRoutingModule } from './system-routing.module';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { TaskComponent } from './components/task/task.component';
import { UserComponent } from './components/user/user.component';
import { TableDynamicComponent } from './components/table-dynamic/table-dynamic.component';
import { TaskService } from './services/task.service';
import { TaskApiModule } from 'infrastructure/repositories/task/task.api.module';
import { SharedModule } from '../shared/shared.module';
import { TaskModalEditComponent } from './components/task-modal-edit/task-modal-edit.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    DashboardPageComponent,
    SettingsPageComponent,
    TaskComponent,
    UserComponent,
    TableDynamicComponent,
    TaskModalEditComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    TaskApiModule,
    SharedModule
  ],
  providers:[
    TaskService
  ]
})
export class SystemModule { }
