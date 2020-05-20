export interface ArticleCreateInput {
  label: string;
  text: string;
}

export interface ArticleResponse {
  id: string | number;
  label: string;
  text: string;
  date: Date;
}
