import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { TasksRoutingModule } from './tasks.routing.module';



@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
