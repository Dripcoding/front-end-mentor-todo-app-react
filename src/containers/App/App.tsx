import React from "react";
import Title from "../../components/Title/index";
import TodoInput from "../../components/TodoInput/index";

import "./App.scss";

const STYLE_BASE: string = "appContainer__";

const App = (): JSX.Element => {
  return (
    <main className={`${STYLE_BASE}mainContainer background-desktop-dark`}>
      <Title />
      <TodoInput />
    </main>
  );
};

export default App;
