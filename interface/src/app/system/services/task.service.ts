import { Injectable, inject } from '@angular/core';
import { TaskModel } from 'domain/task/models/task.model';
import { CreateTaskUseCase } from 'domain/task/usercases/create-task.usecase';
import { DeleteTaskByIdUseCase } from 'domain/task/usercases/delete-task-by-id.usecase';
import { GetTasksUseCase } from 'domain/task/usercases/get-tasks.usecase';
import { UpdateTaskUseCase } from 'domain/task/usercases/update-task.usecase';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TaskService{

  private taskUseCaseGetAll = inject(GetTasksUseCase)
  private taskUseCaseCreate = inject(CreateTaskUseCase)
  private taskUseCaseDelete = inject(DeleteTaskByIdUseCase)
  private taskUseCaseUpdate = inject(UpdateTaskUseCase)

  private toast = inject(ToastrService)

  taskList: TaskModel[] | null =  null

  getTask(){
    this.taskUseCaseGetAll.execute().subscribe({
      next:(res)=>{
        if(!res.error){
          console.log("Cargando data");
          
          this.taskList = res.data
          return
        }
        this.toast.error('Ha sucedido un error')
      },
      error:()=>{
        this.toast.error('Algo sucedio mal!!')
      }
    })
  }
  saveTask(params: TaskModel){
    this.taskUseCaseCreate.execute(params).subscribe({
      next: () => {
        this.toast.success('Creado correctamente')
        this.getTask()
      },
      error: () => {
        this.toast.error('Algo sucedio mal!!')
      }
    })
  }
  deleteTask(id: string){
    this.taskUseCaseDelete.execute(id).subscribe({
      next: () => {
        this.toast.success('La tarea fue eliminado!!')
        this.getTask()
      },
      error: () => {
        this.toast.error('Algo sucedio mal!!')
      }
    })
  }

  updateTask(task: TaskModel){
    this.taskUseCaseUpdate.execute(task).subscribe({
      next: () => {
        this.toast.success('La tarea fue actualizada!!')
        this.getTask()
      },
      error: () => {
        this.toast.error('Algo sucedio mal!!')
      }
    })
  }

  get tasks(){
    return this.taskList
  }

  
}
