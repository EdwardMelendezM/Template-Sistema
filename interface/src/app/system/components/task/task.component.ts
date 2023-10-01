import { Component, OnInit, effect, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskModel } from 'domain/task/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  
  private taskService = inject(TaskService)
  private fb = inject(FormBuilder)

  isActiveEdit = false

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
    
    if(!id){
      throw new Error('No existe id para este task')
    }
    this.taskService.deleteTask(id)
  }
  
  editTask(id: string| undefined){
    this.isActiveEdit = !this.isActiveEdit
  }
}
