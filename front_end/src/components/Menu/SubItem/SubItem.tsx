import classNames from "classnames/bind";
import style from "./SubItem.module.scss";
import { NavLink } from "react-router-dom";

export type SubItemProps = {
  name: string;
  path: string;
  isActive: boolean;
};

const cx = classNames.bind(style);
function SubItem(props: SubItemProps) {
  return (
    <NavLink className={(nav)=>cx("menu__sub-item",{active: nav.isActive})} to={props.path}>
      <span>{props.name}</span>
    </NavLink>
  );
}

export default SubItem;
