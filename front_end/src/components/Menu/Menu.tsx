import MenuItem from "./MenuItem/MenuItem"
import classNames from "classnames/bind";
import style from './Menu.module.scss'

const cx = classNames.bind(style)

function Menu({children}: any) {
    return ( <div className={cx("menu")} >
        {children}
    </div> 
    );
}

export default Menu;