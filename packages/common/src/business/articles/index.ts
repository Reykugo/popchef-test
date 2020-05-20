export interface ArticleCreateInput {
  label: string;
  text: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ArticleUpdateInput extends Partial<ArticleCreateInput> {}

export interface ArticleResponse {
  id: string | number;
  label: string;
  text: string;
  date: Date;
}
