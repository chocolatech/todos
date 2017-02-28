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
  @Input() todos: Todo[];
  constructor(private todosService: TodosService) { }

  reset(): void {
    this.newItem = { 'text': '', 'state': 'todo'};
    this.newItemText = '';
  };

  addNewItem(): void {
    this.newItem.text = this.newItemText;
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
