export class Todo {
    id: number;
    text: string;
    state: string;
    // completeOn: Date;
    // completed: Date;
}

export enum State {
    'todo', 'inProgress', 'done'
}