export interface ViewDetail {
  age: number;
  region: string;
  date: Date;
}

export interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails: ViewDetail[];
}
