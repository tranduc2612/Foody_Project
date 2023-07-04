import images from "~/assets/images/index";
import style from "./header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function Header() {
  return (
    <div className={cx("header")}>
      <img
        className={cx("header__img")}
        src={images.img_layout.imgFruitBowl}
        alt=""
      />
      <img
        className={cx("header__img")}
        src={images.img_layout.imgStrawberry}
        alt=""
      />
      <img
        className={cx("header__img")}
        src={images.img_layout.imgStrawberryGain}
        alt=""
      />
      <img
        className={cx("header__img")}
        src={images.img_layout.imgBgBanner}
        alt=""
      />
    </div>
  );
}

export default Header;
