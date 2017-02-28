export class Todo {
    text: string;
    state: string;
    completeBy?: string;
    completed?: string;
    priority?:boolean;
}

export enum State {
    'todo', 'inProgress', 'done'
}