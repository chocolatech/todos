import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Todo } from './todo.model';

@Injectable()
export class TodosService {
    // getTodos(){
    //     return Promise.resolve(Todo);
    // }
    private todosUrl = 'api/todos';  // URL to web api

    constructor(private http: Http) { }

    getHeroes(): Promise<Todo[]> {
        return this.http.get(this.todosUrl)
            .toPromise()
            .then(response => response.json().data as Todo[])
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}