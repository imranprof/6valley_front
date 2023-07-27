import styles from '../../styles/NavBar.module.css'
import logo from '../../../public/logo.png';
import Image from 'next/image';
import { SearchBar } from './searchBar';

const NavBar = () => {
  
    return (
		<div className={styles.navbar}>
			<div>
				<Image src={logo} alt="Logo" width={128} height={40} />
			</div>
			<SearchBar />
		</div>
    );
  };
  
  export default NavBar;