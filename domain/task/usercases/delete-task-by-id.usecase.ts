import { Observable } from "rxjs";

import { UseCase } from "base/use-case";
import { TaskRepository } from "../repositories/task.repository";

export class DeleteTaskByIdUseCase implements UseCase<number, boolean>{
  constructor(
    private taskRepository: TaskRepository
  ) { }

  execute(id:number): Observable<boolean> {
    return this.taskRepository.deleteTask(id)
  }

}