export class Todo {
    id: number;
    text: string;
    state: string;
    completeBy?: Date;
    priority?:boolean;
}

export enum State {
    'todo', 'inProgress', 'done'
}