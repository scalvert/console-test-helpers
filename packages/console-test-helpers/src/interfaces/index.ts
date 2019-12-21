export interface Dict<T> {
  [key: string]: T;
}

export interface IndexableConsole extends Console, Dict<any> {}
