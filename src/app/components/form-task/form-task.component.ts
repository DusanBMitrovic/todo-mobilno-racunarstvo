import { Component, OnInit } from "@angular/core";
import { Task } from "src/app/models/task.model";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-form-task",
  templateUrl: "./form-task.component.html",
  styleUrls: ["./form-task.component.css"],
})
export class FormTaskComponent implements OnInit {
  taskTitle = "";
  taskDescription = "";
  taskPriority = "";
  taskStatusMessage = "Task not saved...";
  taskSaved = false;

  constructor(private todoService: TodoService) {}

  onSaveTask(): void {
    if (!this.validateTaskTitle()) {
      this.taskStatusMessage = "Task title not entered!";
    } else if (!this.validateTaskDescription()) {
      this.taskStatusMessage = "Task description not entered!";
    } else if (!this.validateTaskPriority()) {
      this.taskStatusMessage = "Task priority not entered!";
    } else {
      /* console.log("Quote added");
      console.log(this.taskTitle, this.taskDescription, this.taskPriority); */
      this.todoService.addTask(
        new Task(this.taskTitle, this.taskDescription, this.taskPriority)
      );
      this.taskSaved = true;
      this.taskStatusMessage = "Task saved!";
      this.resetForm();
    }
  }

  resetForm = () => {
    setTimeout(() => {
      this.taskTitle = "";
      this.taskDescription = "";
      this.taskPriority = "";
      this.taskStatusMessage = "Task not saved...";
      this.taskSaved = false;
    }, 111500);
  };

  validateTaskTitle = () => {
    if (this.taskTitle !== "") {
      return true;
    }
    return false;
  };

  validateTaskDescription = () => {
    if (this.taskDescription !== "") {
      return true;
    }
    return false;
  };

  validateTaskPriority = () => {
    if (this.taskPriority !== "") {
      return true;
    }
    return false;
  };

  ngOnInit() {}
}
