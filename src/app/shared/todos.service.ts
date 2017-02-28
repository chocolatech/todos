import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
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
            .post(this.todosUrl, JSON.stringify(
                { id: todo.id, text: todo.text, state: todo.state, completeBy: todo.completeBy, completed: todo.completed, priority: todo.priority }), 
                { headers: this.headers })
            .toPromise()
            .then(res => {
                return res.json().data})
            .catch(this.handleError);
    }

    update(todo:Todo, id: number): Promise<Response> {

        return this.http
            .put(this.todosUrl+'/'+id, JSON.stringify(
                { id: todo.id, text: todo.text, state: todo.state, completeBy: todo.completeBy, completed: todo.completed, priority: todo.priority }), 
                { headers: this.headers })
            .toPromise();
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}