import styles from '../styles/components/Checkbox.module.scss'

const Checkbox = () => {
  return (
    <label className={styles['label-wrapper']}>
                        <input className={styles['checkbox']} type="checkbox"/>
                        <span className={styles['checkbox-style']}></span>
                        <p className={styles['checkbox__text']}>We take your privacy seriously and are committed to protecting your personal information. By subscribing to our mailing list, you are consenting to receive periodic emails from us about our products, promotions, and other tea-related information.</p>
                    </label>
  )
}

export default Checkbox
