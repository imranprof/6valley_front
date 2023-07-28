import styles from '../../styles/category.module.css'
import {IoIosArrowForward} from 'react-icons/io'

export const Category = (props) => {
    const {name, subcategory} = props;

    return (
        <div className={styles.category_wrapper}>
            <div className={styles.category_icon_wrapper}>
                <div className={styles.category}>{name}</div>
                {subcategory.length > 0 &&
                    <IoIosArrowForward className={styles.icon}/>
                }
            </div>
            <hr
            style={{
            color: "#E6E8F0",
            height: "5px",
            marginBottom: '0px'
            }}/>

        </div>

    );
  };