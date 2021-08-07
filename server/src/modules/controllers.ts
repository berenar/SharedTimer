import * as t from '../types';
import * as Store from './adapters/store';

export const getCurrentTime = async (): Promise<t.timeMs> => await Store.getCurrentTime();

export const incrementCurrentTime = async (elapsed: t.timeMs): Promise<t.timeMs> => {
  const current: number = await getCurrentTime();
  const newTime = current + elapsed;
  return await Store.updateCurrentTime(newTime);
};
