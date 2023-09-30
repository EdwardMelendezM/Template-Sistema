import { UseCase } from "base/use-case";
import { TaskModel } from "../models/task.model";

import { Observable } from "rxjs";
import { TaskRepository } from "../repositories/task.repository";
import { ResponseBody } from "../dtype";

export class GetTasksUseCase implements UseCase<void, ResponseBody>{
  constructor(
    private taskRepository: TaskRepository
  ){}

  execute(): Observable<ResponseBody> {
    return this.taskRepository.getAllTasks()
  }

}