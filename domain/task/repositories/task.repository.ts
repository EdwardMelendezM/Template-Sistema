import { Observable } from "rxjs";
import { TaskModel } from "../models/task.model";
import { ResponseBody } from "../dtype";


/**
 * @info
 * Defino esta clase para ser implementada por clases concretas en las capas externas
 */
export abstract class TaskRepository {
  abstract getAllTasks(): Observable<ResponseBody>

  abstract getTaskById(id: number): Observable<ResponseBody>

  abstract createTask(task: TaskModel): Observable<ResponseBody>

  abstract updateTask(task: TaskModel): Observable<ResponseBody>

  abstract deleteTask(id: number): Observable<ResponseBody>
}