import Image from 'next/image'
import styles from '../styles/components/Blog.module.scss'
import Link from 'next/link'

const Blog = () => {
    return (
        <section className={styles.blog}>
            <div className="container">
            <div className={styles.blog__inner}>
                <h2 className={styles.blog__title}>Our Tea Blog</h2>
                <ul className={styles['blog__list']}>

                <li className={styles['blog__item']}>
                    <Image className={styles['blog__item-image']} src={'/assets/blog/1.jpeg' } alt="" width={270 } height={ 180} loading="lazy" />
                    <div className={styles['blog__item-wrapper']}>
                    <p className={styles['blog__item-text']}>Tea Time Travels: Funny Moments from Around the World</p>
                    <span className={styles['blog__item-name']}>by Robinson Crusoe</span><br/>
                    <Link href='##' className={styles['blog__item-link']}>Read &gt;</Link>
                    </div>
                </li>

                <li className={styles['blog__item']}>
                    <Image className={styles['blog__item-image']} src={'/assets/blog/2.jpeg' } alt="" width={270 } height={ 180} loading="lazy" />
                    <div className={styles['blog__item-wrapper']}>
                    <p className={styles['blog__item-text']}>The Role of Tea in Mental Health
                    </p>
                    <span className={styles['blog__item-name']}>by Joker</span><br/>
                    <Link href='##' className={styles['blog__item-link']}>Read &gt;</Link>
                    </div>
                </li>

                <li className={styles['blog__item']}>
                    <Image className={styles['blog__item-image']} src={'/assets/blog/3.jpeg' } alt="" width={270 } height={ 180} loading="lazy" />
                    <div className={styles['blog__item-wrapper']}>
                    <p className={styles['blog__item-text']}>Tea-rific Tales: Hilarious Stories from Tea Lovers</p>
                    <span className={styles['blog__item-name']}>by Casper the Friendly Ghost</span><br/>
                    <Link href='##' className={styles['blog__item-link']}>Read &gt;</Link>
                    </div>
                </li>

                <li className={styles['blog__item']}>
                    <Image className={styles['blog__item-image']} src={'/assets/blog/4.jpeg' } alt="" width={270 } height={ 180} loading="lazy" />
                    <div className={styles['blog__item-wrapper']}>
                    <p className={styles['blog__item-text']}>Tea and Caffeine: Effects on the Brain and Behavior</p>
                    <span className={styles['blog__item-name']}>by Author Authorius</span><br/>
                    <Link href='##' className={styles['blog__item-link']}>Read &gt;</Link>
                    </div>
                </li>

                </ul>
                <Link href='##' className={styles['blog__button']}>View all</Link>
            </div>
            </div>
        </section>
    )
}

export default Blog
