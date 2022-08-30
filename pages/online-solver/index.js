import styles from './onlinesolver.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
const OnlineSolver = () => {
    // const router = useRouter();
    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/');
    //     }, 4000)
    // }, [router])
    return (
        <div className={styles.body}>
            <div className={`${styles.header} row d-flex justify-content-between`}>
                <div className='col-6'><h1 className={styles.header_text}>Online Solver</h1></div>
                <div className='col-6 d-flex justify-content-center'>
                <Link href={'/'} passHref> Home</Link>
                </div>
                
                
            </div>
            <div className={styles.section}>
                <Image objectFit='contain' layout='fill' alt='under_construction' priority src='/under-construction.png' />
            </div>
            
            
            
            
        </div>
    )
}

export default OnlineSolver;
