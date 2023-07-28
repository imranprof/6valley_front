import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import styles from '../../styles/mainBanners.module.css'

import "react-alice-carousel/lib/alice-carousel.css";

import image1 from '../../../public/1.jpg'
import image2 from '../../../public/2.jpg'
import image3 from '../../../public/3.jpg'
import image4 from '../../../public/4.jpg'


export const MainBanners = () => {
  

    return (
        <div className={styles.sliderimg}>
        <AliceCarousel autoPlay autoPlayInterval={3000} fadeOutAnimation={true} infinite disableButtonsControls>
            <Image src={image1}  className={styles.sliderimg} alt="a"/>
            <Image src={image2}  className={styles.sliderimg} alt="b"/>
            <Image src={image3}  className={styles.sliderimg} alt="c"/>
            <Image src={image4}  className={styles.sliderimg} alt="d"/>
        </AliceCarousel>
        </div>

    );
  };