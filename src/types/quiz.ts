export type Option = {
  id: string;
  text: string;
};

export type Question = {
  id: string;
  title: string;
  options: Option[];
};

export type AnswersState = Record<string, string>;
