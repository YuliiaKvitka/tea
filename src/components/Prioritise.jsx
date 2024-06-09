import Image from 'next/image'
import styles from '../styles/components/Prioritise.module.scss'

const Prioritise = () => {
    return (
        <section className={styles['prioritise']}>
            <div className="container">
            <div className={styles['prioritise__inner']}>
                <h2 className={styles['prioritise__title']}>We Prioritise</h2>
                <ul className={styles["prioritise__list"]}>

                <li className="prioritise__item">
                    <h3 className={styles["prioritise__item-title"]}>Single garden teas</h3>
                    <h4 className={styles["prioritise__item-subtitle"]}>Complete transparency</h4>
                    <Image src={'/assets/prioritise/1.png'} alt="" width={60} height={60} loading="lazy"/>
                </li>

                <li className="prioritise__item">
                    <h3 className={styles["prioritise__item-title"]}>Single garden teas</h3>
                    <h4 className={styles["prioritise__item-subtitle"]}>Complete transparency</h4>
                    <Image src={'/assets/prioritise/1.png'} alt="" width={60} height={60} loading="lazy"/>
                </li>

                <li className="prioritise__item">
                    <h3 className={styles["prioritise__item-title"]}>Single garden teas</h3>
                    <h4 className={styles["prioritise__item-subtitle"]}>Complete transparency</h4>
                    <Image src={'/assets/prioritise/1.png'} alt="" width={60} height={60} loading="lazy"/>
                </li>

                <li className="prioritise__item">
                    <h3 className={styles["prioritise__item-title"]}>Single garden teas</h3>
                    <h4 className={styles["prioritise__item-subtitle"]}>Complete transparency</h4>
                    <Image src={'/assets/prioritise/1.png'} alt="" width={60} height={60} loading="lazy"/>
                </li>
                
                </ul>
            </div>
            </div>
        </section>
    )
}

export default Prioritise
