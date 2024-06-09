// Header.jsx

"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/components/Header.module.scss';
import Link from 'next/link';
import MainMenu from './MainMenu';
import MobileMenuModal from './MobileMenuModal';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles["header__inner"]}>
          <div className={styles['logo-wrapper']}>
            <a href="/" className={styles["logo"]}>
              <Image className={styles['logo-img']} src={'/assets/logo/logo.svg'} alt='' width={73} height={105} loading='lazy' />
            </a>
          </div>
          <MainMenu />
          <div className={styles["user-actions"]}>
            <Link className={styles['user-actions__cart']} href=''><Image src={'/assets/icons/cart.svg'} alt='cart' width={20} height={22} loading='lazy' /></Link>
            <Link className={styles['user-actions__user']} href=''><Image src={'./assets/icons/user.svg'} alt='user' width={18} height={22} loading='lazy' /></Link>
            <Link className={styles['user-actions__search']} href=''><Image src={'/assets/icons/search.svg'} alt='search' width={22} height={22} loading='lazy' /></Link>
          </div>
          <button className={styles["btn-mobile"]} onClick={toggleMenu}>
            <span></span><span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <MobileMenuModal isOpen={menuOpen} onClose={toggleMenu} />
    </header>
  );
};

export default Header;
 


