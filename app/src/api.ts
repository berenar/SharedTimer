import * as Types from './types';

const url = 'http://localhost:3001/timer/api/v1/main'; //TODO: hardcoded

export const fetchTime = async (): Promise<number> => {
  const options = { method: Types.HTTPverbs.Get };
  const response = await fetch(`${url}/current`, options);
  const body: Types.StandardResponse = await response.json();
  if (body.status != 'OK') return 0;
  if (typeof body.data === 'number') return body.data;
  return 0;
};
