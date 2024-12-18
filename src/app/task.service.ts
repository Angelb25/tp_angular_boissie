import { Injectable } from '@angular/core';

// Interface Task
export interface Task {
  name: string;
  completed: boolean;
}

// Service injectable dans les composants
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { name: 'Tâche n°1', completed: false },
    { name: 'Tâche n°2', completed: true }
  ];

  // Récupérer toutes les tâches
  getTasks(): Task[] {
    return this.tasks;
  }

  // Ajouter une nouvelle tâche
  addTask(taskName: string): void {
    if (taskName.trim()) {
      this.tasks.push({ name: taskName.trim(), completed: false });
    }
  }

  // Modifier l'état de complétion d'une tâche
  toggleTaskState(index: number): void {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  // Supprimer une tâche
  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
