import style from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images/index";
import MyButton from "~/components/Button/Index";
import Menu from "~/components/Menu/Menu";
import MenuItem from "~/components/Menu/MenuItem/MenuItem";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const cx = classNames.bind(style);

const list_menu = [
  {
    id: 1,
    title: "Recipes",
    children: [
      {
        name: "My Home",
        path: "/",
        isActive: false,
      },
      {
        name: "My Login",
        path: "/login",
        isActive: false,
      },
      {
        name: "About-us",
        path: "/about-us",
        isActive: false,
      },
    ],
  },
  {
    id: 2,
    title: "My Data",
    children: [
      {
        name: "My Feed",
        path: "/",
        isActive: false,
      },
      {
        name: "My Home",
        path: "/",
        isActive: false,
      },
      {
        name: "My Login",
        path: "/login",
        isActive: false,
      },
    ],
  },
];

function SideBar() {
  return (
    <div className={cx("sidebar")}>
      <div className={cx("sidebar__header")}>
        <section>
          <div className={cx("sidebar__header-logo")}>
            <img src={images.logo} />
          </div>

          <div className={cx("sidebar__header-btn")}>
            <MyButton to="/login" content="Sign Up / Log In" />
          </div>
        </section>
      </div>
      <div className={cx("sidebar__body")}>
        <Menu>
          {list_menu.map((e, index) => {
            return (
              <MenuItem
                key={index}
                id={e.id}
                title={e.title}
                children={e.children}
              />
            );
          })}
        </Menu>
      </div>
      <div className={cx("sidebar__footer")}>
        <div className={cx("sidebar__footer-top")}>
          <div className={cx("sidebar__footer-top-title")}>
            <a className={cx("sidebar__footer-top-link")} href="">
              Privacy
            </a>
          </div>

          <div className={cx("sidebar__footer-top-title")}>
            <a className={cx("sidebar__footer-top-link")} href="">
              Terms and Conditions
            </a>
          </div>

          <div className={cx("sidebar__footer-top-title")}>
            <a className={cx("sidebar__footer-top-link")} href="">
              Copyright
            </a>
          </div>

          <div className={cx("sidebar__footer-top-title")}>
            <a className={cx("sidebar__footer-top-link")} href="">
              Interest-Based Ads
            </a>
          </div>

          <div className={cx("sidebar__footer-top-title")}>
            <a className={cx("sidebar__footer-top-link")} href="">
              Do Not Sell My Personal Information
            </a>
          </div>
        </div>

        <div className={cx("sidebar__footer-middle")}>
          <div className={cx("sidebar__footer-middle-icon")}>
            <FacebookOutlinedIcon
              style={{ fontSize: "2.5rem", cursor: "pointer" }}
            />
          </div>

          <div className={cx("sidebar__footer-middle-icon")}>
            <InstagramIcon style={{ fontSize: "2.5rem", cursor: "pointer" }} />
          </div>

          <div className={cx("sidebar__footer-middle-icon")}>
            <TwitterIcon style={{ fontSize: "2.5rem", cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
