import styles from '../styles/components/Knows.module.scss'
import Form from './Form'

const Knows = () => {
    return (
        <section className={styles['knows']}>
            <div className="container">
            <div className={styles['wrapper']}>
                <h2 className={styles['knows__title']}>Want to know more?</h2>
                <div className={styles['knows__inner']}>
                
                <div className={styles['knows__wrapper']}><p className={styles['knows__text']}>Join our mailing list and stay up-to-date with the latest news, promotions, and exclusive offers from our tea store. Be the first to know about new tea arrivals, seasonal blends, and special discounts. Don't miss out on the tea-rrific perks - sign up today!</p></div>
                <div className={styles['knows__wrapper']}>
                    <Form/>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Knows
