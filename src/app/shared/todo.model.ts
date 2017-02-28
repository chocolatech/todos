export class Todo {
    text: string;
    state: string;
    completeBy?: Date;
    completed?: Date;
    priority?:boolean;
}

export enum State {
    'todo', 'inProgress', 'done'
}