import styles from '../../styles/iconsBar.module.css'
import {HiOutlineMoon} from "react-icons/hi"
import {CgProfile} from "react-icons/cg"

export const IconsBar = () => {
  
    return (
        <div className={styles.iconbar}>
            <HiOutlineMoon className={styles.icon}/>
            <CgProfile  className={styles.icon}/>
        </div>
    );
  };
  
