import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component'; // Importer TaskListComponent
import { HomeComponent } from './components/home/home.component'; // Importer HomeComponent
import { TaskDetailComponent } from './task-detail/task-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },       
  { path: 'tasks', component: TaskListComponent },
  { path: 'task/:index', component: TaskDetailComponent }
];
