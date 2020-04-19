import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models';
import { TaskService } from 'src/app/shared/providers';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  constructor(private taskService: TaskService, private toastr: ToastrService) { }

  tasks: Task[];
  task: Task;
  public title = 'Tarefas';


  ngOnInit() {
    this.getTask();
  }

  private getTask() {
    this.taskService.getTask().subscribe(
      response => {
        this.tasks = response;
      });
  }

  remove(task: Task) {
    this.taskService.deleteTask(task.id).subscribe(
      response => {
        this.getTask();
        this.toastr.warning('Tarefa deletada', 'Atenção');
      },
      error => {
        console.error(error);
        this.toastr.error('Contate o administrador', 'Erro');
      });
  }


  markAsDone(task: Task) {
    task.done = true;
    this.upload(task);
  }

  markAsUndone(task: Task) {
    task.done = false;
    this.upload(task);
  }

  upload(task: Task) {
    console.log(task);
    if (task.done === true) {
      this.taskService.updateTask(task).subscribe(
        response => {
          this.toastr.success('Tarefa concluída', 'Sucesso');
        },
        error => {
          console.error(error);
          this.toastr.error('Contate o administrador', 'Erro');
        });
    } else {
      this.taskService.updateTask(task).subscribe(
        response => {
          this.toastr.info('Tarefa não concluída', 'Atenção');
        },
        error => {
          console.error(error);
          this.toastr.error('Contate o administrador', 'Erro');
        });
    }
  }


}

