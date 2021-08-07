/* eslint-disable @typescript-eslint/no-unused-vars */
import * as R from 'react';
import * as Api from '../api';
import * as Utils from '../utils';
import { Stopwatch } from './Stopwatch';

interface Props {
  className: string;
  light: boolean;
}

export const Timers = (props: Props): R.ReactElement => {
  const [sharedTime, setSharedTime] = R.useState('00:00:00');

  R.useEffect(() => {
    async function fetch() {
      const timeInMs: number = await Api.fetchTime();
      const timeInHuman: string = Utils.millisecondsToHuman(timeInMs);
      setSharedTime(timeInHuman);
    }
    fetch();
  });

  const updateSharedTime = (elapsed: number) => alert(`Add ${elapsed} to total time.`); //TODO

  return (
    <div className={props.className}>
      <div className="sharedTimer">{sharedTime}</div>
      <div className="localTimer">
        <Stopwatch addToTotal={updateSharedTime} />
      </div>
    </div>
  );
};
