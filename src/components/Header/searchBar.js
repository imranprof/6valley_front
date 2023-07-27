import styles from '../../styles/SearchBar.module.css'
import { CiSearch } from "react-icons/ci"
import {AiOutlineMenu} from "react-icons/ai"
import {BiSolidDownArrow} from "react-icons/bi"

export const SearchBar = () => {
  
    return (
        <div className={styles.searchbar}>
            <AiOutlineMenu className={styles.icon}/>
            <div className={styles.cat}>All Categories</div>
            <BiSolidDownArrow className={styles.icon}/>
           	<input className={styles.input} type="text" placeholder="Search for items or store"/>
	<button className={styles.button}>
		<CiSearch className={styles.search_icon}/>
	</button>
        </div>
    );
  };
  