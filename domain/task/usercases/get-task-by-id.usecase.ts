import { UseCase } from "base/use-case";
import { TaskModel } from "../models/task.model";

import { Observable, catchError, of } from "rxjs";
import { TaskRepository } from "../repositories/task.repository";

export class GetTaskByIdUseCase implements UseCase<number, TaskModel | null>{
  constructor(
    private taskRepository: TaskRepository
  ) { }

  execute(id:number): Observable<TaskModel | null> {
    return this.taskRepository.getTaskById(id)
      .pipe(
        catchError(()=>of(null))
      )
  }

}