import styles from './components.module.css'
import Image from 'next/image'

export default function Loader(){
    return(
        <div className={styles.loaderContainer}>
            <Image height={100} width={100} layout='responsive' src="/loader.svg" />
        </div>
    )
}