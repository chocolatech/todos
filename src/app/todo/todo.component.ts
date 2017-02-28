import { Component, OnInit } from '@angular/core';

import { Todo } from '../shared/todo.model';
import { TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodosService]
})
export class TodoComponent implements OnInit {
  todos: Todo[];

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.getTodos();
  }
  getTodos(): void {
    this.todosService.getTodos().then(todos => this.todos = todos);
  }
  update(todo: Todo): void {
    if (todo.state == 'todo') {
      todo.state = 'inProgress';
    } else {
      todo.state = 'done';
    }

    this.todosService.update(todo, todo.id);
  }
}
