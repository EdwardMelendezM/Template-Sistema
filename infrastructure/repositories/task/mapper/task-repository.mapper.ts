import { Mapper } from "base/mapper";
import { TaskModel } from "../../../../domain/task/models/task.model";
import { TaskEntity } from "../entities/task-entity";

export class TaskImplementationRepositoryMapper extends Mapper<TaskEntity,TaskModel>{
  override mapTo(params: TaskModel): TaskEntity {
    return {
      id:params.id,
      title:params.title,
      completed:params.completed
    }
  }

  override mapFrom(params: TaskEntity): TaskModel {
    
    return {
      id: params.id,
      title: params.title,
      completed: params.completed
    }

  }
}