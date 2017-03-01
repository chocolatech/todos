export class Todo {
    id: number;
    text: string;
    state: string;
    completeBy?: string;
    priority?:boolean;
}

export enum State {
    'todo', 'inProgress', 'done'
}