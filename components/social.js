import styles from 'styles/social.module.css'

import {FontAwesomeIcon, fontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faFacebookF,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'

export default function Social(){
    return(
        <ul className={styles.list}>
            <li>
            <a href ="https//twitter.com/">
                <FontAwesomeIcon icon={faTwitter} />
                <span className="sr-only">Twitter</span>
            </a>
            </li>
            <li>
                <a href="https://github.com">
                    <FontAwesomeIcon icon={faFacebookF}/>
                    <span className="sr-only">faFacebook</span>
                </a>
            </li>
            <li>
                <a href="https://github.com">
                    <FontAwesomeIcon icon={faGithub}/>
                    <span className="sr-only">Github</span>
                </a>
            </li>
        </ul>
    )
}