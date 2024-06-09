import styles from '../styles/components/Clients.module.scss'

const Clients = () => {
    return (
        <section className={styles['clients']}>
            <div className="container">
            <div className={styles['clients__inner']}>
                <h2 className={styles['clients__title']}>What our Clients say</h2>
                <ul className={styles['clients__list']}>

                <li className={styles['clients__item']}>
                    <p className={styles['clients__review']}>"As a tea enthusiast, I have tried teas from all over the world, but this tea store truly stands out. Their teas are of the highest quality and the variety is impressive. This is definitely a tea store that every tea lover should visit."</p>
                    <span className={styles['clients__name']}>Alice</span>
                </li>

                <li className={styles['clients__item']}>
                    <p className={styles['clients__review']}>"This tea store is my go-to for all my tea needs. Their selection is unbeatable and the quality of their teas is exceptional."</p>
                    <span className={styles['clients__name']}>Mad-Hatter</span>
                </li>

                <li className={`${styles['clients__item']} `}>
                    <p className={styles['clients__review']}>"If you're a tea lover, you must visit this tea store. The selection is vast and the quality is outstanding. I guarantee you won't be disappointed."</p>
                    <span className={styles['clients__name']}>Dormouse</span>
                </li>

                <li className={`${styles['clients__item']} `}>
                    <p className={styles['clients__review']}>"I am not a big tea drinker, but this tea store has converted me. I highly recommend this tea store to anyone looking for a high-quality tea experience."</p>
                    <span className={styles['clients__name']}>March Hare</span>
                </li>

                </ul>
            </div>
            </div>
        </section>
    )
}

export default Clients
