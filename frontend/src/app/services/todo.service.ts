import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { getLocaleExtraDayPeriods } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  selectedTodo: Todo;
  todo: Todo[];

  readonly URL_API = 'http://localhost:3000/api/todos';

  constructor(private http: HttpClient) {
    this.selectedTodo = new Todo();
  }

  getTodos() {
    return this.http.get(this.URL_API);
  }

  postTodos(todo: Todo) {
    return this.http.post(this.URL_API, todo);
  }

  putTodo(todo: Todo) {
    return this.http.put(this.URL_API + `/${todo._id}`, todo);
  }
  deleteTodos(_id: String) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
