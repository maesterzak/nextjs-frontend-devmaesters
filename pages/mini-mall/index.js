import styles from './mini_mall.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
const MiniMall = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 4000)
    }, [router])
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <h1 className={styles.header_text}>Mini-Mall</h1>
            </div>
            <div className={styles.section}>
                <Image objectFit='contain' layout='fill' alt='under_construction' src='/under-construction.png' />
            </div>
            
            
            
            
        </div>
    )
}

export default MiniMall;
