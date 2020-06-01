export class Todo {
  constructor(_id = '', todo = '', priority = '', date = new Date()) {
    this._id = _id;
    this.todo = todo;
    this.priority = priority;
    this.date = date;
  }
  _id: string;
  todo: string;
  priority: string;
  date: Date;
}
