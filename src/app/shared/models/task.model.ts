export class Task {
    public id: number;
    public task: string;
    public done: boolean;

    constructor(
        task: string,
        done: boolean
    ) {
        this.task = task;
        this.done = done;
    }
}