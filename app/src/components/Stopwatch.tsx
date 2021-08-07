import R from 'react';
import { useStopwatch } from 'react-timer-hook';
import * as Utils from '../utils';

interface ChildProps {
  addToTotal: (elapsed: number) => void;
}

export const Stopwatch = (props: ChildProps): R.ReactElement => {
  const { seconds, minutes, hours, isRunning, start, reset } = useStopwatch({});

  const clickHandler = () => {
    if (isRunning) {
      reset(undefined, false);
      const ms = Utils.humanToMilliseconds(hours, minutes, seconds);
      props.addToTotal(ms);
    } else {
      start();
    }
  };

  return (
    <>
      <div>
        <button className="mainButton" onClick={() => clickHandler()}>
          {Utils.displayHumanTime(hours, minutes, seconds)}
        </button>
      </div>
    </>
  );
};
