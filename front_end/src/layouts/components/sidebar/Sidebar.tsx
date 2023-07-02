import style from './_sidebar.module.scss'
import classNames from "classnames/bind"
import images from "~/assets/images/index"
import MyButton from '~/components/Button/Index';
import Menu from '~/components/Menu/Menu';

const cx = classNames.bind(style)

function SideBar() {
    return ( <div className={cx("sidebar")}>
        <div className={cx("sidebar__header")}>
            <section>
                <div className={cx("sidebar__header-logo")}>
                    <img src={images.logo} />
                </div>

                <div className={cx("sidebar__header-btn")}>
                    <MyButton to="/login" content='Sign Up / Log In' />
                </div>
            </section>
        </div>
        <div className={cx("sidebar__body")}>
            <Menu />
        </div>
        <div className={cx("sidebar__footer")}>footer sidebar</div>
    </div> );
}

export default SideBar;