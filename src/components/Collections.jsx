import Image from 'next/image'
import styles from '../styles/components/Collections.module.scss'

const Collections = () => {
    return (
        <section className={styles.collections}>
            <div className="container">
            <div className={styles["collections__inner"]}>
                <h2 className={styles["collections__title"]}>Explore our Collections</h2>
                <ul className={styles['collections__list']}>
                <li className={styles['collectios__item']}>
                    <Image className={styles['collections__image']} src={'/assets/collections/black.jpeg' } alt='' width={208} height={208 } loading="lazy" />
                    <h3 className={styles['collections__image-title']}>Black</h3>
                </li>

                <li className={styles['collectios__item']}>
                    <Image className={styles['collections__image']} src={'/assets/collections/green.jpeg' } alt='' width={208} height={208 } loading="lazy" />
                    <h3 className={styles['collections__image-title']}>Green</h3>
                </li>

                <li className={styles['collectios__item']}>
                    <Image className={styles['collections__image']} src={'/assets/collections/white.jpeg' } alt='' width={208} height={208 } loading="lazy" />
                    <h3 className={styles['collections__image-title']}>White</h3>
                </li>

                <li className={styles['collectios__item']}>
                    <Image className={styles['collections__image']} src={'/assets/collections/oolong.jpeg' } alt='' width={208} height={208 } loading="lazy" />
                    <h3 className={styles['collections__image-title']}>Oolong</h3>
                </li>

                <li className={styles['collectios__item']}>
                    <Image className={styles['collections__image']} src={'/assets/collections/pu-erh.jpeg' } alt='' width={208} height={208 } loading="lazy" />
                    <h3 className={styles['collections__image-title']}>Pu-erh</h3>
                </li>

                </ul>

            </div>
            </div>
        </section>
    )
}

export default Collections
