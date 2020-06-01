export class Todo {
  constructor(_id = '', todo = '') {
    this._id = _id;
    this.todo = todo;
  }
  _id: string;
  todo: string;
}
