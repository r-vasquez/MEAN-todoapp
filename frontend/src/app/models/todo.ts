export class Todo {
  constructor(todo = '', priority = '', date = new Date()) {
    this.todo = todo;
    this.priority = priority;
    this.dueDate = date;
  }
  _id: string;
  todo: string;
  priority: string;
  dueDate: Date;
}
