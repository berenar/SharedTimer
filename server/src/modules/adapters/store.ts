import { Postgres } from './postgres';
import * as q from './queries';
import * as t from '../../types';

const db = new Postgres();

export const getCurrentTime = async (): Promise<t.Time> => {
  return (await db.query(q.getCurrentTime)).rows[0];
};
