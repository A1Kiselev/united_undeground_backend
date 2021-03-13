import express, { Application, Request, Response } from 'express';
import someData from "./Utils/SomeData";

const port: number = 5001;
const app: Application = express();

const add = (a: number, b: number): number => a + b;

app.get('/members', (req: Request, res: Response) => {
  const response: string = JSON.stringify({ data: someData, add: add(5, 6) });
  res.send(response);
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
