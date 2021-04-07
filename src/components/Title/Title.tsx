import React from "react";

import { ReactComponent as SunToggleImg } from "../../assets/images/icon-sun.svg";
import "./Title.scss";

const STYLE_BASE: string = "title__";

const Title = (): JSX.Element => {
  return (
    <div className={`${STYLE_BASE}container`}>
      <h1>Todo</h1>
      <SunToggleImg data-testid="SUN-TOGGLE-ICON" />
    </div>
  );
};

export default Title;