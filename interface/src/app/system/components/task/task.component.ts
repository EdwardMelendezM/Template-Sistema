import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskModel } from 'domain/task/models/task.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmDeleteComponent } from 'interface/src/app/shared/components/modal-confirm-delete/modal-confirm-delete.component';
import { TaskModalEditComponent } from '../task-modal-edit/task-modal-edit.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  
  private modalService = inject(NgbModal)
  private taskService = inject(TaskService)
  private fb = inject(FormBuilder)


  formTask = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],
    completed: [false, [
      Validators.required,
      Validators.minLength(3)
    ]],
  });

  getValueForm(){
    return this.formTask.getRawValue()
  }

  ngOnInit() {
    this.taskService.getTask()
  }
  
  get tasks(){
    return this.taskService.tasks
  }
  addTask(){
    const params: TaskModel = {
      title: this.getValueForm().title ?? 'd12312asdasd',
      completed: this.getValueForm().completed ?? false
    }
    this.taskService.saveTask(params)
    this.formTask.reset({ title: '', completed: false });
  }

  deleteTask(id: string | undefined){
    if (!id) {
      throw new Error('No existe id para este task')
    }
    const modalRef = this.modalService.open(ModalConfirmDeleteComponent);
    modalRef.result.then((result) => {
      if (result) {
        this.taskService.deleteTask(id)
      }
    });

  }
  
  editTask(task: TaskModel){
    const modalRef = this.modalService.open(TaskModalEditComponent);
    modalRef.componentInstance.data = task;
    modalRef.result.then((result) => {
      if (result) {
        this.taskService.updateTask(result)
      }
    });
  }
}
