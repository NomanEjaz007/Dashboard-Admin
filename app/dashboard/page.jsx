import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Righbar from "../ui/dashboard/rightbar/rightbar";
import Transcations from "../ui/dashboard/transcations/transcations";


const Dashboard =()=>{
    return(
        <>
       <div className={styles.wrapper}>
        <div className={styles.main}>
            <div className={styles.cards}>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <Transcations/>
                <Chart/>
        </div>
        <div className={styles.side}>
        <Righbar/>   
        </div>
       </div>
         </>
    )
}

export default Dashboard