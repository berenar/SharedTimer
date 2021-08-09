import * as Types from './types';
import env from 'react-dotenv';

const url = `http://${env.SERVER_HOST}:${env.SERVER_PORT}/timer/api/v1/main`;
interface CallOptions {
  method: Types.HttpVerbs;
  headers?: Headers;
  body?: { ms: number };
}

export const fetchTime = async (): Promise<number> => {
  const options: CallOptions = { method: Types.HttpVerbs.Get };
  return await call('current', options);
};

export const incrementTime = async (elapsed: number): Promise<number> => {
  const putHeaders = new Headers();
  putHeaders.append('Content-Type', 'application/json');
  const options = {
    method: 'PUT',
    headers: putHeaders,
    body: JSON.stringify({ ms: elapsed }),
  };
  return await call('current', options);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const call = async (resource: string, options: any): Promise<number> => {
  const response = await fetch(`${url}/${resource}`, options);
  const body: Types.StandardResponse = await response.json();
  if (body.status != 'OK') return 0;
  if (typeof body.data === 'number') return body.data;
  return 0;
};
