import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TaskRepository } from 'domain/task/repositories/task.repository';
import { GetTasksUseCase } from 'domain/task/usercases/get-tasks.usecase';
import { GetTaskByIdUseCase } from 'domain/task/usercases/get-task-by-id.usecase';
import { UpdateTaskUseCase } from 'domain/task/usercases/update-task.usecase';
import { DeleteTaskByIdUseCase } from 'domain/task/usercases/delete-task-by-id.usecase';
import { TaskImplementationRespository } from './repositories/task/task-implementation.repository';


const getTaskAllCaseCaseFactory = (useTask: TaskRepository) => new GetTasksUseCase(useTask)
export const getTaskAllUseCaseProvider = {
  provide: GetTasksUseCase,
  useFactory: getTaskAllCaseCaseFactory,
  deps:[TaskRepository]
}

const getTaskByIdUseCaseFactory = (useTask: TaskRepository) => new GetTaskByIdUseCase(useTask)
export const getTaskByIdUseCaseProvider = {
  provide: GetTaskByIdUseCase,
  useFactory: getTaskByIdUseCaseFactory,
  deps:[TaskRepository]
}

const updateTaskUseCaseFactory = (useTask: TaskRepository) => new UpdateTaskUseCase(useTask)
export const updateTaskUseCaseProvider = {
  provide: UpdateTaskUseCase,
  useFactory: updateTaskUseCaseFactory,
  deps: [TaskRepository]
}

const deleteTaskUseCaseFactory = (useTask: TaskRepository) => new DeleteTaskByIdUseCase(useTask)
export const deleteTaskByIdUseCaseProvider = {
  provide: DeleteTaskByIdUseCase,
  useFactory: deleteTaskUseCaseFactory,
  deps: [TaskRepository]
}


@NgModule({
  providers:[
    getTaskAllUseCaseProvider,
    getTaskByIdUseCaseProvider,
    updateTaskUseCaseProvider,
    deleteTaskByIdUseCaseProvider,
    {
      provide: TaskRepository,
      useClass: TaskImplementationRespository
    }
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class DataModule { }
