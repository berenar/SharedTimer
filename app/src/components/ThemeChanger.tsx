import * as R from 'react';
import * as SVG from '../assets/svgs';

interface Props {
  className: string;
  light: boolean;
}

export const ThemeChanger = (props: Props): R.ReactElement => {
  return (
    <div className={props.className}>
      <SVG.Moon fillColor="black" />
      <div>switch</div>
      <SVG.Sun fillColor="black" />
    </div>
  );
};
