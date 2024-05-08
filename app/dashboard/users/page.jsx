import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/users/users.module.css"
import Image from "next/image"
import Link from "next/link"


const UsersPage = ({placeholder}) => {
    return(
        <div className={styles.container}>
         <div className={styles.top}>
            <Search placeholder="Search for a user"/>
          <Link href="/dashborad/users/add">
          <button className={styles.addButton}>Add New</button>
          </Link>
         </div>
         <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created</td>
                        <td>Role</td>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png"
                                alt=""
                                width={40}
                                height={40}
                                className={styles.userImage}
                                />    
                                Nomee Dev
                            </div>
                        </td>
                        <td>nomee@gmail.com</td>
                        <td>13.01.2024</td>
                        <td>admin</td>
                        <td>active</td>
                        <td>
                            <Link href="/">
                            <button className={`${styles.button}  ${styles.view}`}>view</button>
                            </Link>
                            <button className={`${styles.button}  ${styles.view}`}>view</button>
                        </td>
                    </tr>
                </tbody>
         </table>
        </div>
    )
}

export default UsersPage