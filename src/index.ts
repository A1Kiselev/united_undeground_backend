import express, { Application, Request, Response } from 'express';
import someData from "./Utils/SomeData";

const port: number = 5000;
const index: Application = express();

const add = (a: number, b: number): number => a + b;

index.get('/', (req: Request, res: Response) => {
  const response: string = JSON.stringify({ data: someData, add: add(5, 6) });
  res.send(response);
})

// index.get('/', (req: Request, res: Response) => {
//   res.send('response');
// })

index.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
