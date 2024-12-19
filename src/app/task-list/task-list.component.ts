import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService, Task } from '../task.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports: [NgFor, FormsModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = []; 
  newTask: string = ''; 

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask(): void {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }

  toggleTaskState(index: number): void {
    this.taskService.toggleTaskState(index);
  }

  deleteTask(index: number): void {
    this.taskService.removeTask(index);
  }

  get completedTasksCount(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  get remainingTasksCount(): number {
    return this.tasks.filter(task => !task.completed).length;
  }
}
