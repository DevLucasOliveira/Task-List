import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Task } from 'src/app/shared/models/task.model';
import { TaskService } from 'src/app/shared/providers';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private taskService: TaskService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  form: FormGroup;
  tasks: Task[];
  public task: Task;
  public title = 'Lista de Tarefas';


  ngOnInit() {
    this.buildForm();
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
    console.log(this.task);
    this.taskService.createTask(this.task).subscribe(
      response => {
        this.router.navigate(['/list-tasks']);
      },
      error => {
        console.error(error);
      });
  }

  fillTask() {
    let task = this.form.controls.task.value;
    let done = this.form.controls.done.value;
    this.task = new Task(task, done);
  }


}
