import Link from 'next/link'
import styles from '../styles/components/Footer.module.scss'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className="container">
        <div className={styles['footer__container']}>
          <div className={styles['footer__inner']}>
            <div className={styles["footer__list"]}>
    
              <div className={styles["footer__products"]}>
                <h2 className={styles["footer__title"]}>Products</h2>
                <div className={styles['footer__wrapper']}>
                  <Link href='##' className={styles['footer__link']}>Black tea</Link>
                  <Link href='##' className={styles['footer__link']}>Green tea</Link>
                  <Link href='##' className={styles['footer__link']}>White tea</Link>
                  <Link href='##' className={styles['footer__link']}>Oolong tea</Link>
                  <Link href='##' className={styles['footer__link']}>Pu-erh tea</Link>
                </div>
              </div>
    
              <div className={styles["footer__company"]}>
                <h2 className={styles["footer__title"]}>Company</h2>
                <div className={styles['footer__wrapper']}>
                  <Link href='##' className={styles['footer__link']}>About Us</Link>
                  <Link href='##' className={styles['footer__link']}>Contact Us</Link>
                  <Link href='##' className={styles['footer__link']}>Our blog</Link>
                  <Link href='##' className={styles['footer__link']}>FAQ</Link>
                  <Link href='##' className={styles['footer__link']}>Shipping&Delivery</Link>
                  <Link href='##' className={styles['footer__link']}>Refund policy</Link>
                  <Link href='##' className={styles['footer__link']}>Terms of Service</Link>
                </div>
              </div>
            </div>
            
    
              <div className={styles['footer__list1']}>
                <div className={styles['footer__description']}>
                  <p className={styles['footer__text']}>“Tea is a journey. It can take you to new places and open your mind to new experiences. Let every sip transport you to a world of wonder and possibility”</p>
                  <p className={styles['footer__author']}>Dragomir Teodorescu,<br/> Tealuxe owner</p>
                </div>
      
                <div className={styles['footer__contacts']}>
                  <h2 className={styles["footer__title"]}>Stay In Touch</h2>
                  <p className={styles['footer__contacts-text']}>Please feel free to contact us via the email of phone. We would be happy to hear from you!</p>
    
                  <div className={styles['footer__contacts-wrapper']}>
                    <div className={styles['logo-wrapper']}>
                    <Link href="/" className="logo">
                        <Image className={styles['logo-img']} src={'/assets/logo/logo.svg'} alt='' width={57} height={91} loading='lazy' />
                      </Link>
                      </div>
      
                      <div className={styles['footer__contacts-inner']}>
                        <Link href='tel:+380680123456' className={styles['footer__link-phone']}>
                            {/* <Image src={'/assets/footer/phone.png'} alt='' width={21} height={21} loading='lazy'/> */}
                          +380 680 123456
                        </Link>
                        <Link href='mailto:info@tealuxe.com' className={styles['footer__link-email']}>
                            {/* <Image src={'/assets/footer/email.png'} alt='' width={21} height={21} loading='lazy'/> */}
                          info@tealuxe.com
                        </Link>
                      </div>
                  </div>
      
                    <ul className={styles['footer__soc1als']}>
                      <li>
                        <Link href="##" >
                          <Image className={styles['fb-img']} src={'/assets/footer/fb.png'} alt='' width={22} height={22} loading='lazy' />
                        </Link>
                      </li>
      
                      <li>
                        <Link href="##" >
                          <Image className={styles['fb-img']} src={'/assets/footer/youtube.png'} alt='' width={22} height={22} loading='lazy' />
                        </Link>
                      </li>
      
                      <li>
                        <Link href="##" >
                          <Image className={styles['fb-img']} src={'/assets/footer/ig.png'} alt='' width={22} height={22} loading='lazy' />
                        </Link>
                      </li>
      
                      <li>
                        <Link href="##" >
                          <Image className={styles['fb-img']} src={'/assets/footer/twitter.png'} alt='' width={22} height={22} loading='lazy' />
                        </Link>
                      </li>
                    </ul>
                </div>
                
              </div>
          </div>
          {/* ------------- */}
            <div className={styles['footer__extra']}>
              <p className={styles['footer__extra-copy']}>&copy; Tealuxe, 2023</p>
              <ul className={styles['footer__extra-app']}>
                <li><Image  src={'/assets/footer/app1.png'} alt='' width={26} height={20} loading='lazy' /></li>
                <li><Image  src={'/assets/footer/app2.png'} alt='' width={31} height={10} loading='lazy' /></li>
                <li><Image  src={'/assets/footer/app3.png'} alt='' width={29} height={12} loading='lazy' /></li>
                <li><Image  src={'/assets/footer/app4.png'} alt='' width={10} height={12} loading='lazy' /></li>
              </ul>
            </div>
        </div>
        
      </div>
      
    </footer>
  )
}

export default Footer
