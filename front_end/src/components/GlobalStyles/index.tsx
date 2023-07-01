import { FC } from "react";
import "./GlobalStyles.scss";

type PropTypes = {
  children: React.ReactElement;
};

function GlobalStyles({ children }: PropTypes) {
  return <>{children}</>;
}

export default GlobalStyles;
