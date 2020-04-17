import { TasksComponent } from '../tasks/tasks/tasks.component';
import { NgModule } from '@angular/core';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ListTasksComponent } from '../tasks/list-tasks/list-tasks.component';

const routes: Routes = [
    {
        path: '', component: InitialPageComponent,
        children: [
            {
                path: 'tasks',
                component: TasksComponent
            },
            {
                path: 'list-tasks',
                component: ListTasksComponent
            },
            {
                path: '**',
                redirectTo: 'list-tasks'
            },
        ]
    }
];


@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
export class ContainerRoutingModule { }
