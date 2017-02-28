import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  providers: [TodosService]
})
export class AddTodoComponent implements OnInit {
  @Input() newItem: Todo;
  @Input() newItemText: string;
  @Input() dueDate: Date;
  @Input() priority: boolean;
  @Input() todos: Todo[];
  constructor(private todosService: TodosService) { }

  reset(): void {
    this.newItem = {'id': -1, 'text': '', 'state': 'todo', 'completeBy': null, 'priority': false };
    this.newItemText = '';
    this.dueDate = null;
    this.priority = false;

  };

  addNewItem(): void {
    this.newItem.text = this.newItemText;
    this.newItem.completeBy = this.dueDate;
    this.newItem.priority = this.priority;
    this.newItem.id = this.todos.length;
    console.log(this.todos.length)
    this.todosService.addTodo(this.newItem)
      .then(newItem => {
        this.todos.push(newItem);
        console.log(this.todos)
      });
    this.reset();
  };
  ngOnInit() {
    this.reset();
  }

}
