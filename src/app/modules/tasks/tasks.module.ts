import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { TasksRoutingModule } from './tasks.routing.module';
import { ListTasksComponent } from './list-tasks/list-tasks.component';



@NgModule({
  declarations: [TasksComponent, ListTasksComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
