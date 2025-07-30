import { Request, Response, Router } from "express";
// Kích hoạt bộ định tuyến

export const taskRouter:Router=  Router();

 // tạo mặc định 
taskRouter.get('/tasks', (req: Request, res: Response) => {
   res.send('Hello API!');
 });

