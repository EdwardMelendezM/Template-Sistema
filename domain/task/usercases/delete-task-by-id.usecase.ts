import { Observable } from "rxjs";

import { UseCase } from "base/use-case";
import { TaskRepository } from "../repositories/task.repository";
import { ResponseBody } from "../dtype";

export class DeleteTaskByIdUseCase implements UseCase<number, ResponseBody>{
  constructor(
    private taskRepository: TaskRepository
  ) { }

  execute(id: number): Observable<ResponseBody> {
    return this.taskRepository.deleteTask(id)
  }

}