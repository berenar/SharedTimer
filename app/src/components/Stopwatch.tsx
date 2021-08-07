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

  const displayHumanTime = (h: number, m: number, s: number) =>
    `${Utils.withZero(h)}:${Utils.withZero(m)}:${Utils.withZero(s)}`;

  return (
    <>
      <div>
        <button className="mainButton" onClick={() => clickHandler()}>
          {displayHumanTime(hours, minutes, seconds)}
        </button>
      </div>
    </>
  );
};
