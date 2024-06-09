// MobileMenuModal.jsx

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/MobileMenuModal.module.scss';

const MobileMenuModal = ({ isOpen, onClose }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${styles["menu__modal"]} ${isOpen ? styles['menu__modal--open'] : ''}`}>
      <button className={styles['menu__btn']} onClick={onClose}>
        <Image src={'/assets/icons/close.svg'} alt='close' width={20} height={20}/>
      </button>
      <ul className={`{styles["menu__list--modal"]} ${styles.top}`}>
        <li className={styles["menu__item"]}><Link className={styles["menu__link"]} href='/black'>Black</Link></li>
        <li className={styles["menu__item"]}><Link className={styles["menu__link"]} href='/green'>Green</Link></li>
        <li className={styles["menu__item"]}><Link className={styles["menu__link"]} href='/white'>White</Link></li>
        <li className={styles["menu__item"]}><Link className={styles["menu__link"]} href='/oolong'>Oolong</Link></li>
        <li className={styles["menu__item"]}><Link className={styles["menu__link"]} href='/pu-erh'>Pu-erh</Link></li>
      </ul>
      <span className={styles["menu__modal-line"]}></span>
      <ul className={`${styles["menu__list--modal"]} ${styles["menu__list--modal-line"]}`}>
        <li className={styles["menu__item"]}><Link className={styles["menu__link-line"]} href='/contacts'>Contact Us</Link></li>
        <li className={styles["menu__item"]}><Link className={styles["menu__link-line"]} href='/blog'>Our Blog</Link></li>
        <li className={styles["menu__item"]}><Link className={styles["menu__link-line"]} href='/shipping'>Shipping and Delivery</Link></li>
      </ul>

      
        <div className={styles["user-actions"]}>
            <Link className={styles['user-actions__link']} href=''><Image src={'/assets/icons/cart.svg'} alt='cart' width={20} height={22} loading='lazy' /></Link>
            <Link className={styles['user-actions__link']} href=''><Image src={'./assets/icons/user.svg'} alt='user' width={18} height={22} loading='lazy' /></Link>
            <Link className={styles['user-actions__link']} href=''><Image src={'/assets/icons/search.svg'} alt='search' width={22} height={22} loading='lazy' /></Link>
          </div>
      </div>
   
  );
};

export default MobileMenuModal;



