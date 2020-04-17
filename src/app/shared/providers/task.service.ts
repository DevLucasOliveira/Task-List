import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private readonly API_URL: string = environment.apiURL;

    constructor( private http: HttpClient ) {}

    getTask(): Observable<Task[]> {
        return this.http.get<Task[]>(this.API_URL + '/Tasks');
    }
    getTaskforId(id: number): Observable<Task> {
        return this.http.get<Task>(this.API_URL + '/Tasks/' + id);
    }
    createTask(task: Task): Observable<Task> {
        return this.http.post<Task>(this.API_URL + '/Tasks' , task);
    }
    updateTask(task: Task): Observable<Task> {
        return this.http.put<Task>(this.API_URL + '/Tasks', task);
    }
    deleteTask(id: number): Observable<Task> {
        return this.http.delete<Task>(this.API_URL + '/Tasks/' + id);
    }

}