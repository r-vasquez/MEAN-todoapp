import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/models/todo';
import { DatePipe } from '@angular/common';

declare var M: any;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
})
export class TodoComponent implements OnInit {
  constructor(public todoService: TodoService, public datePipe: DatePipe) {}

  ngOnInit(): void {
    // M.FormSelect.init(document.querySelectorAll('select'));
    this.getTodo();
  }

  formattedDate(date: Date) {
    // Used DatePipe from angular to format
    let datepipe = new DatePipe('en-US');
    return datepipe.transform(date, 'yyyy-MM-dd');
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.todoService.selectedTodo = new Todo();
    }
  }

  getTodo() {
    this.todoService.getTodos().subscribe((res) => {
      this.todoService.todo = res as Todo[];
    });
  }

  addTodo(form: NgForm) {
    console.log(form);
    if (form.value._id) {
      this.todoService.putTodo(form.value).subscribe((res) => {
        M.toast({ html: 'Updated Succesfully' });
        console.log(res);
        this.getTodo();
        this.resetForm(form);
      });
    } else {
      this.todoService.postTodos(form.value).subscribe((res) => {
        M.toast({ html: 'Save Succesfully' });
        console.log(res);
        this.getTodo();
        // M.FormSelect.init(document.querySelectorAll('select'));
        this.resetForm(form);
      });
    }
  }

  editTodo(todo: Todo) {
    this.todoService.selectedTodo = todo;
  }

  deleteTodo(_id: String) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.todoService.deleteTodos(_id).subscribe((res) => {
        console.log(res);
        M.toast({ html: 'Todo Deleted' });
        this.getTodo();
      });
    }
  }
}
