import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
})
export class TodoComponent implements OnInit {
  constructor(public todoService: TodoService) {}

  ngOnInit(): void {}

  addTodo(form: NgForm) {
    console.log('Click to Post', form.value);
    this.todoService.postTodos(form.value).subscribe((res) => {
      console.log('el error es en front');
      console.log(res);
    });
  }
}
