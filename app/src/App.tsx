import * as R from 'react';
import './App.css';
import * as Component from './components';
import * as SVG from './assets/svgs';

const App: R.FunctionComponent = () => {
  const [light, setLight] = R.useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <SVG.Logo fillColor="black" className="logo" />
        <Component.ThemeChanger light={light} className="themeChanger" />
      </header>
      <body className="App-Body">
        <Component.Timers light={light} className="timers" />
      </body>
    </div>
  );
};

export default App;
