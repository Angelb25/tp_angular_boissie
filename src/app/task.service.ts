import { Injectable } from '@angular/core';

// Interface Task
export interface Task {
  name: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { name: 'Tâche n°1', completed: false },
    { name: 'Tâche n°2', completed: true }
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(taskName: string): void {
    if (taskName.trim()) {
      this.tasks.push({ name: taskName.trim(), completed: false });
    }
  }

  toggleTaskState(index: number): void {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  getTask(index: number): Task | undefined {
    return this.tasks[index];
  }
  
  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }
  updateTask(index: number, updatedTask: Task): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index] = updatedTask;
    }
  }
  
  
}
