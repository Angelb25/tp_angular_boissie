import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService, Task } from '../task.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent {
  task: Task | undefined; 
  index: number | undefined; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService 
  ) {

    this.index = Number(this.route.snapshot.paramMap.get('index'));

    if (!isNaN(this.index)) {
      this.task = this.taskService.getTask(this.index);
    }

    if (!this.task) {
      this.router.navigate(['/tasks']);
    }
  }

  saveTask(): void {
    if (this.task && this.index !== undefined) {
      this.taskService.updateTask(this.index, this.task);
      alert('Tâche mise à jour avec succès !');
      this.router.navigate(['/tasks']); 
    }
  }
}
