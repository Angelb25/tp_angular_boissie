import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-list',
  imports: [NgFor, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = []; // Liste des tâches
  newTask: string = ''; // Tâche à ajouter

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // Récupérer les tâches au chargement du composant
    this.tasks = this.taskService.getTasks();
  }

  // Ajouter une nouvelle tâche
  addTask(): void {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }

  // Modifier l'état d'une tâche (terminée ou non)
  toggleTaskState(index: number): void {
    this.taskService.toggleTaskState(index);
  }

  // Supprimer une tâche
  deleteTask(index: number): void {
    this.taskService.removeTask(index);
  }

  // Compter les tâches terminées
  get completedTasksCount(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  // Compter les tâches restantes
  get remainingTasksCount(): number {
    return this.tasks.filter(task => !task.completed).length;
  }
}
