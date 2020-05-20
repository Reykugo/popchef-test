import 'module-alias/register'; // this injects the propers module paths in the tsc compiled files in root/dist
import { addArticle } from 'business/db/store/articles';
import { createArticlesTable } from 'technical/db/migration/commands';

export default async function runFixtures() {
  await createArticlesTable();
  await addArticle({
    label: "It's article number 1",
    text: "I'm the article number 1 with text description",
  });
  await addArticle({
    label: "It's article number 2",
    text: "I'm the article number 2 with text description",
  });
  await addArticle({
    label: "It's article number 3",
    text: "I'm the article number 3 with text description",
  });
}

runFixtures();

// eslint-disable-next-line
console.log('Fixtures has been added');
