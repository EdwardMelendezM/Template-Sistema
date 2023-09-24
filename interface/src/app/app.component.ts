import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Template-sistema';
  tasks: any [] = []

  constructor(){}
  
  ngOnInit(): void {
    // this.getTasksUseCase.execute().subscribe((tasks) => {
    //   this.tasks = tasks;
    //   console.log(this.tasks);
    // })
  }

}
