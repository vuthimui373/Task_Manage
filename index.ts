import express , {Express}from 'express';
import dotenv from 'dotenv';
dotenv.config();
import {DataSource} from 'typeorm'
import cors from 'cors';
import bodyParser from 'body-parser';
import { Task } from './src/tasks/tasks.entity';
import { taskRouter } from './src/tasks/tasks.router';
// create db connect
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: true,
  logging: true,
  entities: [Task], 
});

const app: Express = express();

console.log('PORT from env:', process.env.PORT);
app.use(bodyParser.json());

app.use(cors());
const PORT = process.env.PORT;

AppDataSource.initialize()
  .then(() => {
    console.log(' Đã kết nối tới database thành công!');
  })
  .catch((err) => {
    console.error('Lỗi khi kết nối database:', err);
  });
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
app.use('/', taskRouter)
