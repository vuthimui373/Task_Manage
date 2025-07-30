import { Task } from "./tasks.entity";
import { AppDataSource } from "../..";
export class TaskController{
    constructor(
        private taskRepository = AppDataSource.getRepository(Task)
    ) {}

    public async getAll():Promise<Task[]> {

    }

}