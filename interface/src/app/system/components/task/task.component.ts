import { Component, OnInit, effect, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})



export class TaskComponent implements OnInit {
  
  private taskService = inject(TaskService)


  constructor(){
    effect(() => {
    });
  }

  ngOnInit() {
    this.taskService.getTask()
    console.log(this.taskService.tasks);
  }


}
