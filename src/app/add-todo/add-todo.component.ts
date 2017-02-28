import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  providers: [TodosService]
})
export class AddTodoComponent implements OnInit {
  newItem: Todo;
  newItemText: string;

  constructor(private todosService: TodosService) { }

reset():void {
  this.newItem = { 'text': '', 'state': 'todo' };
  this.newItemText='';
};

addNewItem():void {
  this.newItem.text = this.newItemText;
  this.todosService.addTodo(this.newItem);
  this.reset();
};
ngOnInit() {
   this.reset();
}

}
