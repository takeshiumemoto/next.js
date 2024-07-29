import Link from '@/next/link'
import styles from '@/styles/nav.module.className'

export default function Nav(){
    return(
        <nav>
            <ul className={styles.list}> 
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>about</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}