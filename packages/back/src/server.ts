import 'module-alias/register'; // this injects the propers module paths in the tsc compiled files in root/dist
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from 'bootstrap/router';

const port = process.env.PORT || '8080';
const app = express();

app.use(cors());
app.use(bodyParser.json());

router(app);

async function runSqliteMigration() {
  const { run } = await import('./technical/db/migration');
  await run();
}

if (process.env.NODE_ENV !== 'test') {
  // run migration for sqlite db
  runSqliteMigration();

  // eslint-disable-next-line no-console
  app.listen(port, () => console.log(`Listening to port ${port}`));
}

export default app;
