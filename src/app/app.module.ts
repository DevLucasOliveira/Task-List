import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { TaskService } from './shared/providers/task.service';
import { AppRoutingModule } from './app-routing.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { ContainerModule } from './modules/container/container.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TasksModule,
    ContainerModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [TaskService],
  exports: [ToastrModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
