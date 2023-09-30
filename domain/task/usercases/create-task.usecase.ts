import { UseCase } from "base/use-case";
import { TaskModel } from "../models/task.model";

import { Observable } from "rxjs";
import { TaskRepository } from "../repositories/task.repository";
import { ResponseBody } from "../dtype";

export class CreateTaskUseCase implements UseCase<TaskModel, ResponseBody>{
  constructor(
    private taskRepository: TaskRepository
  ) { }

  execute(params: TaskModel): Observable<ResponseBody> {
    return this.taskRepository.createTask(params)
  }

}