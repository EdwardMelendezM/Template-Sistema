import { Component, Input, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskModel } from 'domain/task/models/task.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-modal-edit',
  templateUrl: './task-modal-edit.component.html',
  styleUrls: ['./task-modal-edit.component.css']
})
export class TaskModalEditComponent {

  private activeModal = inject(NgbActiveModal)
  private fb = inject(FormBuilder)
  private toast = inject(ToastrService)

  @Input() data?: TaskModel

  formEditTask = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    completed: [false],
  })

  ngOnInit(): void {
    this.formEditTask.setValue({
      title:this.data?.title ?? '',
      completed:this.data?.completed ?? false
    });
  }

  getValueForm() {
    return this.formEditTask.getRawValue()
  }

  onCloseModal() {
    this.activeModal.close();
  }

  onConfirm() {
    if (this.formEditTask.invalid){
      this.formEditTask.markAllAsTouched()
      this.toast.error('Complete el formulario')
      return
    }
    const body = {
      id: this.data?._id,
      title: this.getValueForm().title!,
      completed: this.getValueForm().completed!
    }
    this.activeModal.close(body);
  }
}