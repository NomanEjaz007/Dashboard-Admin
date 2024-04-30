import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css"
import Image from "next/image";
import { MdDashboard } from "react-icons/md";

const menuItems = [ 

    {
        title: "Pages",
        list:[
            {
                title: "Dashboard",
                path:"/dashboard",
                icon: <MdDashboard/>
            },
            {
                title: "Users",
                path:"/dashboard/users",
                icon: <MdDashboard/>
            },
            {
                title: "Products",
                path:"/dashboard/products",
                icon: <MdDashboard/>
            },
            {
                title: "Transcations",
                path:"/dashboard/transactions",
                icon: <MdDashboard/>
            }
        ]
    },
    {
        title:"Analytics",
        list:[
            {
                title: "Revenue",
                path:"/dashboard/revenue",
                icon: <MdDashboard/>
            },
            {
                title: "Revenue",
                path:"/dashboard/reports",
                icon: <MdDashboard/>
            },
            {
                title: "Revenue",
                path:"/dashboard/teams",
                icon: <MdDashboard/>
            },
        ]
    },
    {
        title:"User",
        list:[
            {
                title: "Setting",
                path:"/dashboard/setting",
                icon: <MdDashboard/>
            },
            {
                title: "Help",
                path:"/dashboard/help",
                icon: <MdDashboard/>
            },
        ]
    }

]


const Sidebar  = ()=> {
    return(
        <>
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50" />
                <div className={styles.userDetail}>
                <span className={styles.username}>Jhon Joe</span>
                <span className={styles.userTitle}>Administrator</span>
            </div>
            </div>
           
          <ul>
          {menuItems.map((cat)=>(
            <li key={cat.title}>
                <span style={styles.cat}>{cat.title}</span>
                {cat.list.map(item=> (
                    <MenuLink item={item} key={item.title}/>
                ))}
            </li>
          ))}

          </ul>
        </div>
        </>
    )
}

export default Sidebar