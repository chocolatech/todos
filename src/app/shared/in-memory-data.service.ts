import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let todos = [
            { id: 0, text: 'sometxt1', state: 'todo', completeBy: '3-03-1017', completed:'now', priority: true },
            { id: 1, text: 'sometxt2', state: 'inProgress'},
            { id: 2, text: 'sometxt3', state: 'done', completeBy: '3-03-1017', completed:'now'},
            { id: 3, text: 'sometxt4', state: 'todo', completeBy: '3-03-1017', completed:'now' },
        ];
        return {todos};
    }
}