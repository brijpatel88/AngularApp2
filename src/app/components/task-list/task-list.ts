// src/app/components/task-list/task-list.ts

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task';

import { FormsModule } from '@angular/forms';
import { CompletedDirective } from '../../directives/completed';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [
    FormsModule,
    CompletedDirective,
    TruncatePipe,
    CommonModule
  ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskListComponent {

  // Obsevable list of tasks
  tasks$: Observable<Task[]>;

  // Input field value
  newTaskTitle = '';

  constructor(private taskService: TaskService) {
    // Subscribe to the task stream from the service
    this.tasks$ = this.taskService.tasks$;
  }

  // Add a new task using the service
  addTask() {
    if (this.newTaskTitle.trim()) {
      this.taskService.addTask(this.newTaskTitle.trim());
      this.newTaskTitle = ''; // Clear input field
    }
  }

  // Mark a task as completed or not completed
  toggleTask(id: number) {
    this.taskService.toggleTask(id);
  }

  // Clears all the tasks using the service
  clearTasks() {
    this.taskService.clearTasks();
  }
}
