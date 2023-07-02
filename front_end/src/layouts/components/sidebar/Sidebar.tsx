import style from './_sidebar.module.scss'
import classNames from "classnames/bind"
import images from "~/assets/images/index"
import MyButton from '~/components/Button/Index';
import Menu from '~/components/Menu/Menu';
import MenuItem from '~/components/Menu/MenuItem/MenuItem';

const cx = classNames.bind(style);

const list_menu = [
    {
      id: 1,
      title: "Recipes",
      children: [
        {
          name: "My Home",
          path: "/",
          isActive:false 
        },
        {
          name: "My Login",
          path: "/login",
          isActive:false 
        },{
          name: "About-us",
          path: "/about-us",
          isActive:false 
        }  
      ]
    },
    {
      id: 2,
      title: "My Data",
      children: [
        {
          name: "My Feed",
          path: "/", 
          isActive:false
        },
        {
          name: "My Home",
          path: "/",
          isActive:false 
        },{
          name: "My Login",
          path: "/login",
          isActive:false 
        }  
      ]
    },
  ];

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
            <Menu>
                {list_menu.map((e,index)=>{
                    return(
                      <MenuItem key={index} id={e.id} title={e.title} children={e.children} />
                    )
                })}
            </Menu>
        </div>
        <div className={cx("sidebar__footer")} style={{backgroundColor:"#f5f5f5"}}><h1>footer sidebar</h1></div>
    </div> );
}

export default SideBar;