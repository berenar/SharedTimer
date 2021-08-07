import * as R from 'react';

interface Props {
  className: string;
  light: boolean;
}

export const Timers = (props: Props): R.ReactElement => {
  return (
    <div className={props.className}>
      <div className="sharedTimer">00:00:00 shared</div>
      <div className="localTimer">00:00:01 local</div>
    </div>
  );
};
