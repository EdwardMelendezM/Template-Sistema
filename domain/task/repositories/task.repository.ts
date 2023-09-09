import { Observable } from "rxjs";
import { TaskModel } from "../models/task.model";


/**
 * @info
 * Defino esta clase para ser implementada por clases concretas en las capas externas
 */
export abstract class TaskRepository {
  abstract getAllTasks(): Observable<TaskModel[] | []>

  abstract getTaskById(id: number): Observable<TaskModel | null>

  abstract createTask(task: TaskModel): Observable<TaskModel | null>

  abstract updateTask(id: number, task: TaskModel): Observable<TaskModel | null>

  abstract deleteTask(id: number): Observable<boolean>
}