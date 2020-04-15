import { TaskService } from './../../../shared/providers/task.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Task } from 'src/app/shared/models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: TaskService) { }

  form: FormGroup;
  public mode = 'list';
  tasks: Task[];
  task: Task;
  public title = 'Lista de Tarefas';

  ngOnInit() {
    this.buildForm();
    this.loadPage();
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

  loadForm(task: Task){
    this.form.patchValue({
      task: task.task,
      done: task.done
    });
  }

  loadPage() {
    this.service.getTask().subscribe(
      response => {
        this.tasks = response;
      },
      error => {
        console.error(error);
      });
  }

  save() {
    debugger;
    this.fillTask();
    this.service.createTask(this.task).subscribe(
      response => {
        this.loadPage();
      },
      error => {
        console.error(error);
      });
  }

  fillTask() {
    if (this.task === undefined) {
      this.task = new Task();
    }
    this.task.task = this.form.controls.task.value;
    this.task.done = this.form.controls.done.value;
  }

  remove(task: Task) {
    this.service.deleteTask(task.id).subscribe(
      response => {
        this.loadPage();
      },
      error => {
        console.error(error);
      });
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
