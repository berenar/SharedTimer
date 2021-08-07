/* eslint-disable @typescript-eslint/no-unused-vars */
import * as R from 'react';
import * as Api from '../api';
import * as Utils from '../utils';
import { Stopwatch } from './Stopwatch';

interface Props {
  className: string;
}

export const Timers = (props: Props): R.ReactElement => {
  const [sharedTime, setSharedTime] = R.useState('00:00:00');

  R.useEffect(() => {
    fetchSharedTime();
  });

  const fetchSharedTime = async () => {
    const timeInMs: number = await Api.fetchTime();
    const timeInHuman: string = Utils.millisecondsToHuman(timeInMs);
    setSharedTime(timeInHuman);
  };

  const stopLocalTimeHandler = async (elapsed: number) => {
    const updatedTime = await Api.incrementTime(elapsed);
    const timeInHuman: string = Utils.millisecondsToHuman(updatedTime);
    setSharedTime(timeInHuman);
  };

  return (
    <div className={props.className}>
      <div className="sharedTimer">{sharedTime}</div>
      <div className="localTimer">
        <Stopwatch addToTotal={(elapsed) => stopLocalTimeHandler(elapsed)} />
      </div>
    </div>
  );
};
