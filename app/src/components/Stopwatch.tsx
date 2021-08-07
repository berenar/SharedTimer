import R from 'react';
import { useStopwatch } from 'react-timer-hook';
import * as Utils from '../utils';

interface ChildProps {
  addToTotal: (elapsed: number) => void;
}

export const Stopwatch = (props: ChildProps): R.ReactElement => {
  const { seconds, minutes, hours, isRunning, start, pause } = useStopwatch({});

  const clickHandler = () => {
    if (isRunning) {
      pause();
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
