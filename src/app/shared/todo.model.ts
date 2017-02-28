export class Todo {
    text: string;
    state: string;
    completeBy: string;
    completed: string;
}

export enum State {
    'todo', 'inProgress', 'done'
}