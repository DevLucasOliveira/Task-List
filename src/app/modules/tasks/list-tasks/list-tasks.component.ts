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


  markAsDone(todo: Task) {
    todo.done = true;
  }

  markAsUndone(todo: Task) {
    todo.done = false;
  }

  changeMode(mode: string) {
    this.mode = mode;
  }

}

