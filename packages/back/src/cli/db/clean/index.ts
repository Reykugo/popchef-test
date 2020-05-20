import 'module-alias/register'; // this injects the propers module paths in the tsc compiled files in root/dist
import { deleteArticleTable } from 'technical/db/migration/commands';

async function run() {
  deleteArticleTable();
}

run();
