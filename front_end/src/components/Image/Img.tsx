import styles from "./Img.module.scss";
import classNames from "classnames/bind";

type PropTypes = {
  src: string;
  size?: "xl" | "md" | "sm" | "lg" | "f-width";
  classNames?: string;
  isBorder?: boolean;
};

const cx = classNames.bind(styles);

function Img({
  src,
  size = "md",
  classNames = "custom-class",
  isBorder = true,
  ...passProps
}: PropTypes) {
  return (
    <img
      className={cx(`custom_img`, {
        [size]: size,
        [classNames]: classNames,
        border: isBorder,
      })}
      src={src}
      {...passProps}
    />
  );
}

export default Img;
