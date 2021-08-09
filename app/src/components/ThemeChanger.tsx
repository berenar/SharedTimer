import * as R from 'react';
import * as SVG from '../assets/svgs';
import Switch from 'react-switch';
interface Props {
  className: string;
  lights: boolean;
  changeHandler: (on: boolean) => void;
}

export const ThemeChanger = (props: Props): R.ReactElement => {
  return (
    <div className={props.className}>
      <SVG.Moon color="black" />
      <Switch
        className="toggleSwitch"
        offColor="#373838"
        onColor="#373838"
        checkedIcon={false}
        uncheckedIcon={false}
        onChange={(val) => props.changeHandler(val)}
        checked={props.lights}
      />
      <SVG.Sun color="black" />
    </div>
  );
};
