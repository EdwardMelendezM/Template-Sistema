import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

import { TaskRepository } from "domain/task/repositories/task.repository";
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

  getTaskById(id: number): Observable<ResponseBody> {
    return this.http
      .get<ResponseBody>(`${this.baseUrl}/task/${id}`)
  }

  createTask(task: TaskModel): Observable<ResponseBody> {
    return this.http
      .post<ResponseBody>(`${this.baseUrl}/task/`, task)
  }

  updateTask(task: TaskModel): Observable<ResponseBody> {
    return this.http
      .patch<ResponseBody>(`${this.baseUrl}/task/`, task)
  }

  deleteTask(id: string): Observable<ResponseBody> {
    return this.http
      .delete<ResponseBody>(`${this.baseUrl}/task/${id}`)
  }
  
}