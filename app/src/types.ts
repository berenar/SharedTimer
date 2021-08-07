export interface StandardResponse {
  status: string;
  message: string;
  data: unknown;
}

export type HHMMSS = `${number}:${number}:${number}`;
