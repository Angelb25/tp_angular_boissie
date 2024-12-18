import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component'; // Importer TaskListComponent
import { HomeComponent } from './components/home/home.component'; // Importer HomeComponent

export const routes: Routes = [
  { path: '', component: HomeComponent },       // Page d'accueil
  { path: 'tasks', component: TaskListComponent } // Page des tâches
];
