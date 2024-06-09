import styles from '../styles/components/Blockquote.module.scss'

const Blockquote = () => {
    return (
        <blockquote className={styles.blockquote}>
            <p className={styles.blockquote__text}>"Tea is not just a drink, it's a way of life and a<br/> way to connect with <span className={styles['bg']}>our loved ones."</span></p>
        </blockquote>
    )
}

export default Blockquote
