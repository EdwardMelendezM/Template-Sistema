import { Component, OnInit } from '@angular/core';
import { GetTasksUseCase } from 'domain/task/usercases/get-tasks.usecase';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Template-sistema';
  tasks: any [] = []

  constructor(
    private getTasksUseCase: GetTasksUseCase
  ){}
  
  ngOnInit(): void {
    this.getTasksUseCase.execute().subscribe((tasks) => {
      this.tasks = tasks;
      console.log(this.tasks);
    })
    
  }

}
