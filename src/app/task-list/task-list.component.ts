import { Component } from '@angular/core';
import { NgFor  } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [NgFor, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: { name: string; completed: boolean }[] = [
    { name: 'Tâche n°1', completed: false },
    { name: 'Tâche n°2', completed: true },
  ];

  newTask: string = ''; 

  addTask(): void {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask.trim(), completed: false });
      this.newTask = '';
    }
  }
  
  toggleTaskState(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
  
  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
  
}
