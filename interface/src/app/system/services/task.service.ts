import { Injectable, OnInit, inject, signal } from '@angular/core';
import { TaskModel } from 'domain/task/models/task.model';
import { GetTasksUseCase } from 'domain/task/usercases/get-tasks.usecase';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements OnInit{

  
  private taskUseCase = inject(GetTasksUseCase)
  private toast = inject(ToastrService)

  taskList?: any = []
  ngOnInit(): void {
    this.getTask()
  }

  getTask(){
    this.taskUseCase.execute().subscribe({
      next:(res)=>{
        if(!res.error){
          console.log(res.data);
          
          this.taskList = res.data
          return
        }
        this.toast.error('Ha sucedido un error')
      },
      error:()=>{
        this.toast.error('Algo malo ha sucedido')
      }
    })
  }

  get tasks(){
    return this.taskList
  }

  
}
