import { UseCase } from "base/use-case";
import { TaskModel } from "../models/task.model";

import { Observable, catchError, of } from "rxjs";
import { TaskRepository } from "../repositories/task.repository";
import { ResponseBody } from "../dtype";

export class GetTaskByIdUseCase implements UseCase<number, ResponseBody>{
  constructor(
    private taskRepository: TaskRepository
  ) { }

  execute(id: number): Observable<ResponseBody> {
    return this.taskRepository.getTaskById(id)
  }

}