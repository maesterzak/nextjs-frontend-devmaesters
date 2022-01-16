import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

function Aboutus() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
            
        }, 4000)
    }, [router])
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <h1 className={styles.header_text}>About Us</h1>
            </div>
            <div className={styles.section}>
                <Image objectFit='contain' layout='fill' className={styles.image} alt='under_construction' src='/under-construction.png' />
            </div>
            
            
            
            
        </div>
    )
}

export default Aboutus
