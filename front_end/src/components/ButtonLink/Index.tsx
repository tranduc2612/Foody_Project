import classNames from "classnames/bind";
import style from "./ButtonLink.module.scss";
import { Link, LinkProps } from "react-router-dom";

type ButtonProps = {
  content: string;
  to?: string;
  href?: string;
  classNames?: string;
  typeStyle?: "default" | "primary" | "outline";
  typeBtn?: "submit" | "button";
  disabled?: any;
  onClick?: (event: Event) => void;
};

const cx = classNames.bind(style);

type CompType = "a" | "button" | typeof Link;

function MyButton({
  content,
  to,
  href,
  classNames = "",
  typeStyle = "default",
  typeBtn,
  onClick,
  ...passprops
}: ButtonProps & Record<string, any>) {
  let Comp: CompType = "a";

  const props: ButtonProps = {
    onClick,
    content: "",
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  if (typeBtn) {
    return (
      <button
        type={typeBtn}
        className={cx("custom__button", {
          [classNames]: true,
          [typeStyle]: true,
        })}
      >
        {content}
      </button>
    );
  }

  return (
    <Comp
      className={cx("custom__button", {
        [classNames]: true,
        [typeStyle]: true,
      })}
      {...(props as LinkProps)}
      {...passprops}
    >
      {content}
    </Comp>
  );
}

export default MyButton;
