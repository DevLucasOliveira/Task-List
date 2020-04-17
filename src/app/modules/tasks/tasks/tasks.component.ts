import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Task } from 'src/app/shared/models/task.model';
import { TaskService } from 'src/app/shared/providers';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private fb: FormBuilder, private taskService: TaskService) { }

  form: FormGroup;
  public mode = 'list';
  tasks: Task[];
  task: Task;
  public title = 'Lista de Tarefas';


  ngOnInit() {
    this.getTask();
  }

  private getTask() {
    this.taskService.getTask().subscribe(
      response => {
        this.tasks = response;
      });
  }


  buildForm() {
    this.form = this.fb.group({
      task: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])],
      done: [false]
    });
  }

  loadForm(task: Task) {
    this.form.patchValue({
      task: task.task,
      done: task.done
    });
  }


  save() {
    this.fillTask();
    this.taskService.createTask(this.task).subscribe(
      response => {
        this.getTask();
      },
      error => {
        console.error(error);
      });
  }

  fillTask() {
    if (this.task === undefined) {
       //this.task = new Task();
    }
    this.task.task = this.form.controls.task.value;
    this.task.done = this.form.controls.done.value;
  }


  add() {
    this.save();
    this.clear();
  }

  clear() {
    this.form.reset();
  }

  markAsDone(todo: Task) {
    todo.done = true;
    this.save();
  }

  markAsUndone(todo: Task) {
    todo.done = false;
    this.save();
  }

  changeMode(mode: string) {
    this.mode = mode;
  }

}
