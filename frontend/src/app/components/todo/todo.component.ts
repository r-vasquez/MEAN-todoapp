import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/models/todo';

declare var M: any;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
})
export class TodoComponent implements OnInit {
  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    M.FormSelect.init(document.querySelectorAll('select'));
    console.log('on init');
    this.getTodo();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.todoService.selectedTodo = new Todo();
    }
  }

  getTodo() {
    console.log('getTodo');
    this.todoService.getTodos().subscribe((res) => {
      this.todoService.todo = res as Todo[];
      console.log(res);
    });
  }

  addTodo(form: NgForm) {
    this.todoService.postTodos(form.value).subscribe((res) => {
      console.log(res);
      M.toast({ html: 'Save Succesfully' });
      this.getTodo();
      this.resetForm(form);
      M.FormSelect.init(document.querySelectorAll('select'));
    });
  }
}
