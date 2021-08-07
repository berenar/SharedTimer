import * as t from '../types';
import * as Store from './adapters/store';

export const getCurrentTime = async (): Promise<t.Time> => Store.getCurrentTime();
