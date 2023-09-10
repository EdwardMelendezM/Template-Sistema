import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

import { TaskRepository } from "domain/task/repositories/task.repository";
import { TaskImplementationRepositoryMapper } from "./mapper/task-repository.mapper";
import { TaskModel } from "domain/task/models/task.model";
import { Observable, map } from "rxjs";
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
        map(entities => {
          if (!Array.isArray(entities)) {
            throw new Error('Los datos recibidos no son un arreglo.');
          }
          entities.forEach(entity => {
            if (typeof entity.id !== 'number' || typeof entity.title !== 'string' || typeof entity.completed !== 'boolean') {
              throw new Error('Los datos recibidos no tienen el formato esperado.');
            }
          });
          return entities.map(entity => this.taskMapper.mapFrom(entity))
        })
        )
  }

  getTaskById(id: number): Observable<TaskModel> {
    return this.http
      .get<TaskEntity>(`${this.baseUrl}/task/${id}`)
      .pipe(
        map(entity => this.taskMapper.mapFrom(entity)),
      )
  }

  createTask(task: TaskModel): Observable<TaskModel> {
    return this.http
      .post<TaskEntity>(`${this.baseUrl}/task/`, task)
      .pipe(
        map(this.taskMapper.mapFrom),
      )
  }

  updateTask(id: number, task: TaskModel): Observable<TaskModel> {
    return this.http
      .patch<TaskEntity>(`${this.baseUrl}/task/${id}`, task)
      .pipe(
        map(this.taskMapper.mapFrom),
      )
  }

  deleteTask(id: number): Observable<boolean> {
    return this.http
      .delete(`${this.baseUrl}/task/${id}`)
      .pipe(
        map(()=>true),
      )
  }
  
}