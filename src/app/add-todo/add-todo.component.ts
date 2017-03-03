import { Component, OnInit, Input } from '@angular/core';
import {IMyOptions} from 'mydatepicker';
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
  @Input() dueDate: Object;
  @Input() priority: boolean;
  @Input() todos: Todo[];
  todoExists: boolean;

  private myDatePickerOptions: IMyOptions = {
    dateFormat: 'yyyy.mm.dd',
  };

  // Initialized to specific date
  //model: Object = { date: { year: 2018, month: 10, day: 9 } };

  constructor(private todosService: TodosService) { }

  reset(): void {
    this.newItem = { 'id': -1, 'text': '', 'state': 'todo', 'completeBy': null, 'priority': false };
    this.newItemText = '';
    this.dueDate = null;
    this.priority = false;

  };

  addNewItem(): void {
    this.newItem.text = this.newItemText;
    this.newItem.completeBy = JSON.stringify(this.dueDate);
    this.newItem.priority = this.priority;
    this.newItem.id = this.todos.length;

    console.log(this.dueDate);


    if (this.checkIfTodoExists()) {
      this.todoExists = true;

      console.log(this.todoExists);

    } else {
      this.todosService.addTodo(this.newItem)
        .then(newItem => {
          this.todos.push(newItem);
          //console.log(this.todos)
        });
      this.reset();
    }

  };

  checkIfTodoExists(): boolean {
    let mapped = this.todos.map(item => {
      return item.text;
    });

    return mapped.includes(this.newItemText);
  }

  ngOnInit() {
    this.reset();
  }

}
