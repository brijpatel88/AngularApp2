// src/app/services/task.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // In-memory list of tasks
  private tasks: Task[] = [];

  // observable used to notify components when task change
  private tasksSubject = new BehaviorSubject<Task[]>([]);

  // Public observable stream for components
  tasks$ = this.tasksSubject.asObservable();

  constructor() {}

  // add a new task to the list
  addTask(title: string) {
    const newTask: Task = {
      id: Date.now(), // simple unique id based on timestamp
      title: title,
      completed: false,
    };
    this.tasks.push(newTask);
    this.tasksSubject.next(this.tasks); // Emit updated task list
  }

  // Toggle completion status of a task
  toggleTask(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      this.tasksSubject.next(this.tasks); // Emit updated task list
    }
  }

  // Clear all tasks from the list
  clearTasks() {
    this.tasks = [];
    this.tasksSubject.next(this.tasks); // Emit updated task list
  }
}

