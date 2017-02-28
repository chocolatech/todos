import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Todo } from './todo.model';

@Injectable()
export class TodosService {
    // getTodos(){
    //     return Promise.resolve(Todo);
    // }
    private todosUrl = 'api/todos';  // URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getTodos(): Promise<Todo[]> {
        return this.http.get(this.todosUrl)
            .toPromise()
            .then(response => response.json().data as Todo[])
            .catch(this.handleError);
    }

    addTodo(todo: Todo): Promise<Todo> {
        return this.http
            .post(this.todosUrl, JSON.stringify({ text: todo.text, state: todo.state }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}