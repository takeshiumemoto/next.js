import styles from '@/styles/hero.module.css'

export default function Hero({title,subtitle},imgeOn=false){
    return(
        <div className={styles.flexContainer}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            {imgeOn && <figure>[画像]</figure>}
        </div>    
    )
}    