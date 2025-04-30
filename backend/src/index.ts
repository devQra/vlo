import express, { Express } from 'express';
import route from '@/router/index';

const app: Express = express();
const port = 3000;

app.use('/', route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
