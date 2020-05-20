import { RunResult } from 'sqlite3';
import {
  ArticleCreateInput,
  ArticleResponse,
} from 'common-project/dist/business/articles';
import db from '..';

function runToPromise(
  query: string,
  params?: (string | number | Date)[],
): Promise<number> {
  return new Promise((resolve, reject) => {
    db.run(
      query,
      params,
      // eslint-disable-next-line func-names
      function(this: RunResult, err: Error) {
        if (err) reject(err);
        else resolve(this.lastID);
      },
    );
  });
}

function allToPromise<T>(
  query: string,
  params?: (string | number | Date)[],
): Promise<T> {
  return new Promise((resolve, reject) => {
    db.all(query, params, (err: Error, rows: T) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

function getToPromise<T>(
  query: string,
  params?: (string | number | Date)[],
): Promise<T> {
  return new Promise((resolve, reject) => {
    db.get(query, params, (err: Error, row: T) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

export const createArticlesTable = async () => {
  return runToPromise(`
    CREATE TABLE IF NOT EXISTS articles(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        label TEXT NOT NULL,
        text TEXT NOT NULL,
        date DATE NOT NULL
    );
  `);
};

export const deleteArticleTable = async () => {
  return runToPromise(`DROP TABLE articles;`);
};

export const addArticle = async (
  label: ArticleCreateInput['label'],
  text: ArticleCreateInput['text'],
  date: Date,
) => {
  return runToPromise(
    `
    INSERT INTO "articles"(label, text, date) VALUES (?, ? , ?)`,
    [label, text, date],
  );
};

export const updateArticle = async (
  id: ArticleResponse['id'],
  {
    label,
    text,
    date,
  }: {
    label: ArticleCreateInput['label'];
    text: ArticleCreateInput['text'];
    date: Date;
  },
) => {
  return runToPromise(
    `UPDATE "articles"
      SET label = ?, text = ?, date = ?
      WHERE id = ?`,
    [label, text, date, id],
  );
};

export const deleteArticle = async (id: ArticleResponse['id']) => {
  return runToPromise(`DELETE FROM "articles" WHERE id = ?`, [id]);
};

export const getArticles = async (): Promise<ArticleResponse[]> => {
  return allToPromise<ArticleResponse[]>(`SELECT * FROM "articles"`);
};

export const getArticle = async (
  id: ArticleResponse['id'],
): Promise<ArticleResponse> => {
  return getToPromise<ArticleResponse>(
    `SELECT * FROM "articles" WHERE id = ?`,
    [id],
  );
};
