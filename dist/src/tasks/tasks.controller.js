"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const index_1 = require("../../index");
const tasks_entity_1 = require("./tasks.entity");
class TasksController {
    constructor(taskRepository = index_1.AppDataSource.getRepository(tasks_entity_1.Task)) {
        this.taskRepository = taskRepository;
    }
    // @ts-ignore
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            // Declare a variable to hold all tasks
            let allTasks;
            // Fetch all tasks using the repository
            try {
                allTasks = yield this.taskRepository.find({
                    order: {
                        date: 'ASC',
                    },
                });
                console.log(allTasks);
            }
            catch (errors) {
                console.log(errors);
            }
            // Convert the tasks instance to an array of objects
        });
    }
}
exports.TasksController = TasksController;
