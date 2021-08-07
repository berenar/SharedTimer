import * as R from 'react';
import './App.css';
import * as Component from './components';
import * as SVG from './assets/svgs';

const App: R.FunctionComponent = () => {
  // TODO
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [light, setLight] = R.useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <SVG.Logo fillColor="black" className="logo" />
        <Component.ThemeChanger light={light} className="themeChanger" />
      </header>
      <div className="App-Body">
        <Component.Timers light={light} className="timers" />
      </div>
    </div>
  );
};

export default App;