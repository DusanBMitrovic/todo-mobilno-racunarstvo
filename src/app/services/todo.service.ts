import { Injectable } from "@angular/core";
import { Task } from "../models/task.model";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  tasks: Task[] = [];

  addTask(task: Task):void {
    this.tasks.push(task);
  }
  constructor() {}
}
