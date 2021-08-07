import * as R from 'react';
import './App.css';
import * as Component from './components';
import * as SVG from './assets/svgs';

const App: R.FunctionComponent = () => {
  const [lights, setLights] = R.useState(true);

  return (
    <div className="App">
      <div className={`nightMode-${lights ? `disabled` : `enabled`}`}>
        <header className="App-header">
          <SVG.Logo color="black" className="logo" />
          <Component.ThemeChanger lights={lights} className="themeChanger" setLights={setLights} />
        </header>
        <div className="App-Body">
          <Component.Timers className="timers" />
        </div>
      </div>
    </div>
  );
};

export default App;
