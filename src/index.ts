import express, { Application } from 'express';
import router from "./routes/Routes";
import openDatabaseConnection from "./mongo/mongo";

const port: number = 5000;
const app: Application = express();

app.use(router);

const start = async () => {
  try {
    await openDatabaseConnection();

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    })
  } catch (e) {
    console.log(e);
  }
}

start();
