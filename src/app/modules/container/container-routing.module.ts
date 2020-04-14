import { NgModule } from '@angular/core';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '', component: InitialPageComponent,
        children: [
            {
                path: 'tasks',
                loadChildren: () => import('../tasks/tasks.module').then(m => m.TasksModule)
            }
        ]
    }
];


@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
export class ContainerRoutingModule { }
