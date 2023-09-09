import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

import { TaskRepository } from "domain/task/repositories/task.repository";
import { TaskImplementationRepositoryMapper } from "./mapper/task-repository.mapper";
import { TaskModel } from "domain/task/models/task.model";
import { Observable, catchError, map, of } from "rxjs";
import { TaskEntity } from "./entities/task-entity";
import { environment } from "environment/environment";

@Injectable({
  providedIn: 'root'
})
export class TaskImplementationRespository extends TaskRepository{

  private baseUrl = environment.api_url
  private taskMapper = new TaskImplementationRepositoryMapper();

  constructor(
    private http: HttpClient
  ) { super() }


  getAllTasks(): Observable<TaskModel[]> {
    return this.http
      .get<TaskEntity[]>(`${this.baseUrl}/task`)
      .pipe(
        map(entities => entities.map(entity => this.taskMapper.mapFrom(entity))),
        catchError(()=>of([]))
        )
  }

  getTaskById(id: number): Observable<TaskModel| null> {
    return this.http
      .get<TaskEntity>(`${this.baseUrl}/task/${id}`)
      .pipe(
        map(entity => this.taskMapper.mapFrom(entity)),
        catchError(() => of(null)) // Manejo de errores
      )
  }

  createTask(task: TaskModel): Observable<TaskModel | null> {
    return this.http
      .post<TaskEntity>(`${this.baseUrl}/task/`, task)
      .pipe(
        map(this.taskMapper.mapFrom),
        catchError(()=>of(null))
      )
  }

  updateTask(id: number, task: TaskModel): Observable<TaskModel | null> {
    return this.http
      .patch<TaskEntity>(`${this.baseUrl}/task/${id}`, task)
      .pipe(
        map(this.taskMapper.mapFrom),
        catchError(()=>of(null))
      )
  }

  deleteTask(id: number): Observable<boolean> {
    return this.http
      .delete(`${this.baseUrl}/task/${id}`)
      .pipe(
         map(()=>true),
         catchError(()=>of(false))
      )
  }
  
}