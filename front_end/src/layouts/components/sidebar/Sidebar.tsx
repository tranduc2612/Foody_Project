import style from './_sidebar.module.scss'
import classNames from "classnames/bind"

const cx = classNames.bind(style)

function SideBar() {
    return ( <div className={cx("sidebar")}>
        <div className={cx("sidebar__header")}>header sidebar</div>
        <div className={cx("sidebar__body")}>body sidebar</div>
        <div className={cx("sidebar__footer")}>footer sidebar</div>
    </div> );
}

export default SideBar;