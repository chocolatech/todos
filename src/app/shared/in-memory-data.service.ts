import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let todos = [
            { id: 1, text: 'sometxt1', state: 'todo', completeBy: 'tomorrow', completed:'now', priority: true },
            { id: 2, text: 'sometxt2', state: 'inProgress'},
            { id: 3, text: 'sometxt3', state: 'done', completeBy: 'tomorrow', completed:'now'},
            { id: 4, text: 'sometxt4', state: 'todo', completeBy: 'tomorrow', completed:'now' },
        ];
        return {todos};
    }
}