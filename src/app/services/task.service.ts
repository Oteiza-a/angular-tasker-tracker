import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    const getUrl = `${this.apiUrl}/tasks`;

    console.log(getUrl);

    return this.http.get<Task[]>(getUrl);
  }
}
