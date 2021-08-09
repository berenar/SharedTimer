import * as R from 'react';
import env from 'react-dotenv';
import './App.css';
import * as Component from './components';
import * as SVG from './assets/svgs';
import * as CONST from './constants';

const App: R.FunctionComponent = () => {
  const getLightsFromSession = (): boolean => {
    const retrieved: string = sessionStorage.getItem(CONST.LIGHTS) || '""';
    return JSON.parse(retrieved) === true;
  };

  const setLIghtsAndPersistLS = (lights: boolean): void => {
    setLights(lights);
    sessionStorage.setItem(CONST.LIGHTS, String(lights));
  };

  const [lights, setLights] = R.useState(getLightsFromSession());

  printEnv();

  return (
    <div className="App">
      <div className={`nightMode-${lights ? `disabled` : `enabled`}`}>
        <header className="App-header">
          <SVG.Logo color="black" className="logo" />
          <Component.ThemeChanger
            lights={lights}
            className="themeChanger"
            changeHandler={setLIghtsAndPersistLS}
          />
        </header>
        <div className="App-Body">
          <Component.Timers className="timers" />
        </div>
      </div>
    </div>
  );
};

export default App;

// eslint-disable-next-line no-console
const printEnv = () => console.log(`${env.SERVER_HOST}, ${env.SERVER_PORT}`);
