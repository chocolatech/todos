import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {TODOS} from './mock-todos';

@Injectable()
export class TodosService {
    getTodos(){
        return Promise.resolve(TODOS);
    }
}