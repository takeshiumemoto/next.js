import styles from 'styles/post-categories.css'
import Link from 'next/link'
import { faSignLanguage } from '@fortawesome/free-solid-svg-icons'

export default function PostCategories({categories}){
    return(
        <ul className={styles.list}>
          {categories.map(({name,slug})=>(
            <li key={slug}>
                <Link href={`/blog/category/${slug}`}>
                <a>{name}</a>
                </Link>
            </li>
    ))}
    </ul>
    )
}