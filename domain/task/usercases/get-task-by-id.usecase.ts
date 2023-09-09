import { UseCase } from "base/use-case";
import { TaskModel } from "../models/task.model";

import { Observable, catchError, of } from "rxjs";
import { TaskRepository } from "../repositories/task.repository";

export class GetTaskByIdUseCase implements UseCase<number, TaskModel>{
  constructor(
    private taskRepository: TaskRepository
  ) { }

  execute(id:number): Observable<TaskModel> {
    return this.taskRepository.getTaskById(id)
  }

}