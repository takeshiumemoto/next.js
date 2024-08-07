import styles from 'styles/posts.module.css'
import Link from 'next/link'
import { faSignLanguage } from '@fortawesome/free-solid-svg-icons'

export default function Posts({posts}){
    return(
        <div className={styles.gridContainer}>
            {posts.map(({title,slug})=>(
                <article className={styles.post} key={slug}>
                    <Link href={'/blog/${slug}'}>
                    <a>
                        <h2>{title}</h2>
                    </a>
                    </Link>
                </article>
            ))}
        </div>
    )
}