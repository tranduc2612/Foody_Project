import { FC } from "react";
import "./GlobalStyles.scss";

type PropTypes = {
  children: React.ReactNode;
};

function GlobalStyles({ children }: PropTypes) {
  return <>{children}</>;
}

export default GlobalStyles;
