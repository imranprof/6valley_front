import Image from 'next/image';
import styles from '../../styles/mainBody.module.css'
import { SideBar } from './sideBar';
import { MainBanners } from './mainBanners';
import banner from '../../../public/banner.png'


export const MainBody = () => {
  
    return (
		<div className={styles.mainBody}>
            <SideBar />
            <MainBanners />
            <Image src={banner} alt="banner" width={300} />
		</div>
    );
  };