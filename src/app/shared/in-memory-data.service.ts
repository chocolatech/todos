import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let todos = [
            { id: 0, text: 'sometxt1', state: 'todo', completeBy: '2017.3.17', priority: true },
            { id: 1, text: 'sometxt2', state: 'todo', completeBy: '2017.3.3'},
            { id: 2, text: 'sometxt3', state: 'todo', completeBy: '2017.2.3'},
            { id: 3, text: 'sometxt4', state: 'todo'},
        ];
        return {todos};
    }
}