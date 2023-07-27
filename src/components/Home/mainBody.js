import styles from '../../styles/mainBody.module.css'
import { SideBar } from './sideBar';
import { MainBanners } from './mainBanners';

export const MainBody = () => {
  
    return (
		<div className={styles.mainBody}>
            <SideBar />
            <MainBanners />
		</div>
    );
  };