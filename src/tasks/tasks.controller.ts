
import { Request, Response} from 'express';
import { AppDataSource } from '../../index';
import { Task } from './tasks.entity';
import { instanceToPlain } from 'class-transformer';

class TasksController {


  // @ts-ignore
  public async getAll(req: Request, res: Response): Promise<Response> {

    let allTasks: Task[];

   // lấy tất cả tác vụ bằng kho lưu trữ
    try {
      allTasks = await AppDataSource.getRepository(
      Task,
    ).find({
        order: {
          date: 'ASC',
        },
      });
      allTasks=instanceToPlain(allTasks) as Task[];
      return res.json(allTasks).status(200);

//  

    } catch (_errors) {
       return res
       .json({error: ' Internal Server Error'})
       .status(500);
    }

    // chuyển thành mảng đối tượng
  }
}
export const taskController= new TasksController();