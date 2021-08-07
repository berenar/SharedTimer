import R from 'react';
import { Play } from '../assets/svgs';
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
          <div className="playAndTime">
            <Play color="white" className="playButton" />
            {Utils.displayHumanTime(hours, minutes, seconds)}
          </div>
        </button>
      </div>
    </>
  );
};
