import { Postgres } from './postgres';
import * as q from './queries';
import * as t from '../../types';

const db = new Postgres();

export const getCurrentTime = async (): Promise<t.timeMs> => {
  const bigint = (await db.query(q.getCurrentTime)).rows[0].shared_time_ms;
  return Number(bigint); //Parse BigInt to number, if not, it will be a String
};

export const updateCurrentTime = async (newTime: t.timeMs): Promise<t.timeMs> => {
  const bigint = (await db.query(q.updateCurrentTime, [newTime.toString()])).rows[0].shared_time_ms;
  return Number(bigint);
};
