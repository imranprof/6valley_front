import styles from '../../styles/navMenu.module.css'
import {AiOutlineMenu} from 'react-icons/ai'
import {IoIosArrowDown} from 'react-icons/io'

export const NavMenu = () => {
  
    return (
		<div className={styles.navMenu}>
      <div className={styles.category}>
        <AiOutlineMenu className={styles.icon} />
        Browse Category
        <IoIosArrowDown className={styles.arIcon}/>
        </div>
      <div className={styles.menuItem}>Home</div>
      <div className={styles.menuItem}>Offers
        <IoIosArrowDown />
      </div>
      <div className={styles.menuItem}>Stores
        <IoIosArrowDown />
      </div>
      <div className={styles.menuItem}>Brands
        <IoIosArrowDown />
      </div>
      <div className={styles.menuItem}>Discounted Products</div>
		</div>
    );
  };