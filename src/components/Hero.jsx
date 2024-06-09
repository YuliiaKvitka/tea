import styles from '../styles/components/Hero.module.scss'

const Hero = () => {
  return (
    <section className={styles.hero}>
        <div className="container">
          <div className={styles['hero__wrapper']}>
            <h1 className={styles['hero__title']}>A cup of tea is a moment of calm in the chaos of life</h1>
            <p className={styles['hero__text']}>Wide selection of high-quality teas from all over the world, carefully curated by tea experts.</p>
          </div>
        </div>
      </section>
  )
}

export default Hero
