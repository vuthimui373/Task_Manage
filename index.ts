import express, { Express } from 'express';
import { DataSource } from 'typeorm';
import { Task } from './src/tasks/tasks.entity';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { tasksRouter } from './src/tasks/tasks.router';

dotenv.config();

const app: Express = express();
const port = Number(process.env.PORT)  

app.use(cors());
app.use(bodyParser.json());


app.use('/', tasksRouter);


app.use('*', (req, res) => {
  res.status(404).send('Route not found');
});

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [Task],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(` Server is running at http://localhost:${port}`);
    });
    console.log(' Data Source has been initialized!');
  })
  .catch((err) => {
    console.error(' Error during Data Source initialization', err);
  });
