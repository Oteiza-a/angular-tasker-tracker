import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    const url = `${this.apiUrl}/tasks`;
    return this.http.get<Task[]>(url);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/tasks/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/tasks/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }
}
