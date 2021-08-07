export interface StandardResponse {
  status: string;
  message: string;
  data: unknown;
}

export type HHMMSS = `${number}:${number}:${number}`;

export enum HttpVerbs {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
}
