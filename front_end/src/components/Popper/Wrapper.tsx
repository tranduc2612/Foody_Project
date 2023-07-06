import classNames from "classnames/bind";
import styles from "./Wrapper.module.scss";

const cx = classNames.bind(styles);
type PropsType = {
  children: React.ReactNode;
};

function Wrapper({ children }: PropsType) {
  return <div className={cx("wrapper")}>{children}</div>;
}

export default Wrapper;
