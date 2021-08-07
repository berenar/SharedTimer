import * as t from '../types';
import * as Store from './adapters/store';

export const getCurrentTime = async (): Promise<t.timeMs> => Store.getCurrentTime();
