import { Observable } from "rxjs";
import { TaskModel } from "../models/task.model";
import { ResponseBody } from "../dtype";


/**
 * @info
 * Defino esta clase para ser implementada por clases concretas en las capas externas
 */
export abstract class TaskRepository {
  abstract getAllTasks(): Observable<ResponseBody>

  abstract getTaskById(id: number): Observable<TaskModel>

  abstract createTask(task: TaskModel): Observable<TaskModel>

  abstract updateTask(id: number, task: TaskModel): Observable<TaskModel>

  abstract deleteTask(id: number): Observable<boolean>
}