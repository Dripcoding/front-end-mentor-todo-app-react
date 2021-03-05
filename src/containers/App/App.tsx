import {ReactComponent as SunToggleImg} from '../../assets/images/icon-sun.svg';
import MoonToggleImg from '../../assets/images/icon-moon.svg';

import './App.scss';

const STYLE_BASE: string = 'appContainer__';

const App = (): JSX.Element => {
  return (
    <main className={`${STYLE_BASE}mainContainer background-desktop-dark`}>
        <div className={`${STYLE_BASE}titleContainer`}>
            <h1>Todo</h1>
            <SunToggleImg data-testid="SUN-TOGGLE-ICON"/>
        </div>
    </main>
  );
}

export default App;
