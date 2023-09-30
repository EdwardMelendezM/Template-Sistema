import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

import { TaskRepository } from "domain/task/repositories/task.repository";
import { TaskImplementationRepositoryMapper } from "./mapper/task-repository.mapper";
import { TaskModel } from "domain/task/models/task.model";
import { Observable, map } from "rxjs";
import { TaskEntity } from "./entities/task-entity";
import { environment } from "environment/environment";
import { ResponseBody } from "domain/task/dtype";

@Injectable({
  providedIn: 'root'
})
export class TaskImplementationRespository extends TaskRepository{

  private baseUrl = environment.api_url
  // private taskMapper = new TaskImplementationRepositoryMapper();

  constructor(
    private http: HttpClient
  ) { super() }


  getAllTasks(): Observable<ResponseBody> {
    return this.http
      .get<ResponseBody>(`${this.baseUrl}/task`)
  }

  getTaskById(id: number): Observable<TaskModel> {
    return this.http
      .get<TaskEntity>(`${this.baseUrl}/task/${id}`)
  }

  createTask(task: TaskModel): Observable<TaskModel> {
    return this.http
      .post<TaskEntity>(`${this.baseUrl}/task/`, task)
  }

  updateTask(id: number, task: TaskModel): Observable<TaskModel> {
    return this.http
      .patch<TaskEntity>(`${this.baseUrl}/task/${id}`, task)
  }

  deleteTask(id: number): Observable<any> {
    return this.http
      .delete(`${this.baseUrl}/task/${id}`)
  }
  
}