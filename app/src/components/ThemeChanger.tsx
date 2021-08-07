import * as R from 'react';
import * as SVG from '../assets/svgs';
import Switch from 'react-switch';
interface Props {
  className: string;
  light: boolean;
}

export const ThemeChanger = (props: Props): R.ReactElement => {
  const [lights, setLights] = R.useState(true);
  return (
    <div className={props.className}>
      <SVG.Moon color="black" />
      <Switch
        className="toggleSwitch"
        offColor="#373838"
        onColor="#373838"
        checkedIcon={false}
        uncheckedIcon={false}
        onChange={(v) => setLights(v)}
        checked={lights}
      />
      <SVG.Sun color="black" />
    </div>
  );
};
