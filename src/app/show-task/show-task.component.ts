import { Component, OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../Services/task_service';

@Component({
  selector: 'app-show-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent implements OnInit {
  tasks: string[] = ["task 1", "task 2", "task 3"];

  // taskService : TaskService = inject(TaskService);
  constructor(private taskService: TaskService){

  }

  ngOnInit(): void {
    this.taskService.CreateTask.subscribe((value)=>{
      this.tasks.push(value);
    })
  }

}
