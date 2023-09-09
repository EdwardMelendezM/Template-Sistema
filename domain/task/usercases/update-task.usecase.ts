import { UseCase } from "base/use-case";
import { TaskModel } from "../models/task.model";

import { Observable, catchError, of } from "rxjs";
import { TaskRepository } from "../repositories/task.repository";

export class UpdateTaskUseCase implements UseCase<{ id: number, task:TaskModel }, TaskModel | null>{
  constructor(
    private taskRepository: TaskRepository
  ) {}
  
  execute(params:{
    id: number,
    task: TaskModel
  }): Observable<TaskModel | null> {
    const { id, task } = params;
    
    return this.taskRepository.updateTask(id, task)
      .pipe(
        catchError(() => of(null))
      )
  }

}