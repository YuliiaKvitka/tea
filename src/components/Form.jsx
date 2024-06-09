import styles from '../styles/components/Form.module.scss'
import Checkbox from './Checkbox'

const Form = () => {
  return (
    <form className={styles['form']}>
                    <label className={styles['form__label']} htmlFor=""></label>
                    <input className={styles['form__input']} type="email" placeholder="name@email.com"/>
                    <button type="submit" className={styles['form__button']}>Join</button>
                    <Checkbox/>
                    
                    </form>
  )
}

export default Form
