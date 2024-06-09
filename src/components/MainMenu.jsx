// MainMenu.jsx

import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/MainMenu.module.scss';

const MainMenu = () => {
  return (
    <nav className={styles["menu"]}>
      <ul className={styles["menu__list"]}>
        <li className={styles["menu__item"]}><Link className={styles["menu__link"]} href='/black'>Black</Link></li>
        <li className={styles["menu__item"]}><Link className={styles["menu__link"]} href='/green'>Green</Link></li>
        <li className={styles["menu__item"]}><Link className={styles["menu__link"]} href='/white'>White</Link></li>
        <li className={styles["menu__item"]}><Link className={styles["menu__link"]} href='/oolong'>Oolong</Link></li>
        <li className={styles["menu__item"]}><Link className={styles["menu__link"]} href='/pu-erh'>Pu-erh</Link></li>
      </ul>
    </nav>
  );
};

export default MainMenu;

