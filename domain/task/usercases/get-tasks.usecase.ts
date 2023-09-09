import { UseCase } from "base/use-case";
import { TaskModel } from "../models/task.model";

import { Observable } from "rxjs";
import { TaskRepository } from "../repositories/task.repository";

export class GetTasksUseCase implements UseCase<void,TaskModel[]>{
  constructor(
    private taskRepository: TaskRepository
  ){}

  execute(): Observable<TaskModel[]> {
    return this.taskRepository.getAllTasks()
  }

}