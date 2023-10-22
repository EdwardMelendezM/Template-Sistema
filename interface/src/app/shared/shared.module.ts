import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ModalComponent } from './components/modal/modal.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { ModalConfirmDeleteComponent } from './components/modal-confirm-delete/modal-confirm-delete.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ErrorPageComponent,
    ModalComponent,
    InputComponent,
    ButtonComponent,
    ModalConfirmDeleteComponent
  ],
    imports: [
        CommonModule,
        SharedRoutingModule,
        ReactiveFormsModule
    ],
  exports:[
    ModalComponent,
    ModalConfirmDeleteComponent,
    InputComponent
  ]
})
export class SharedModule { }
