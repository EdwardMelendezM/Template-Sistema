import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-modal-edit',
  templateUrl: './task-modal-edit.component.html',
  styleUrls: ['./task-modal-edit.component.css']
})
export class TaskModalEditComponent {

  private activeModal = inject(NgbActiveModal)
  private fb = inject(FormBuilder)
  @Input() data: string = ''

  formEditTask = this.fb.group({
    title: [null, [Validators.required]],
    completed: [null, [Validators.required]],
  })

  ngOnInit(): void {
    console.log('recibiendo', this.data);
  }

  onCloseModal() {
    this.activeModal.close();
  }

  onConfirm() {
    console.log("Editando");
    
  }
}