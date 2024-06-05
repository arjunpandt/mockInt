import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../Services/task_service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  newTask: string = '';


  taskService: TaskService = inject(TaskService);

  CreateTask = () => {
    console.log(this.newTask);
    this.taskService.OnCreatetask(this.newTask)
  }
}
