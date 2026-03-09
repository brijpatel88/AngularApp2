// src/app/models/task.ts
// Task model used throughout the application
// Defines the structure of a task object 
export interface Task {
  id: number;             // Unique identifier for the task
  title: string;          // Title of the task
  description?: string;   // Optional description of the task
  completed: boolean;     // Status of the task (completed or not)
  dueDate?: Date;         // Optional due date for the task
}