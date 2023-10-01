import { Observable } from "rxjs";

import { UseCase } from "base/use-case";
import { TaskRepository } from "../repositories/task.repository";
import { ResponseBody } from "../dtype";

export class DeleteTaskByIdUseCase implements UseCase<string, ResponseBody>{
  constructor(
    private taskRepository: TaskRepository
  ) { }

  execute(id: string): Observable<ResponseBody> {
    return this.taskRepository.deleteTask(id)
  }

}