import { Link } from "react-router-dom";
import style from "./MenuItem.module.scss";
import classNames from "classnames/bind";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import SubItem, { SubItemProps } from "../SubItem/SubItem";

const cx = classNames.bind(style);

type MenuItemProps = {
  id: number;
  title: string;
  children: SubItemProps[];
};

function MenuItem({ id, title, children }: MenuItemProps) {
  const [toggleSubList, setToggleSubList] = useState(false);

  return (
    <div
      className={cx("menu__item")}
    >
      <div className={cx("menu__item-title")} onClick={() => setToggleSubList(!toggleSubList)}>
        <span>{title}</span>
        <KeyboardArrowRightIcon
          sx={{
            fontSize: 20,
            transition: "all .3s ease-in-out",
            transform: `rotate(${toggleSubList?"90deg":"0deg"})`,
          }}
        />
      </div>

      <ul
        className={cx("menu__sub-list", {
          active: toggleSubList,
        })}
      >
        {children.map((e, index) => {
          return (
            <SubItem
              key={index}
              name={e.name}
              path={e.path}
              isActive={e.isActive}
            />
          );
        })}
      </ul>
      <div className={cx("divider")}></div>
    </div>
  );
}

export default MenuItem;
