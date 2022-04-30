import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHardHat,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>devmaesters</title>
        <meta name="description" content="Welcome to devmaesters.com we offer free programming tips,tutorials, tricks and coding support." />
        <meta name="keywords" content="programming, nextjs, reactjs, coding, websites, python tutorials, prisma, graphql, django, django rest framework" />
        <link rel="icon" href="/favicon1.ico" />
        
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <main className={`d-flex justify-content-end align-items-end ${styles.main}`}>
        {/* <Image layout="fill" src={'/images/home-3.jpg'} alt="homepage image" priority /> */}
        <div  className={`card text-light p-3`}>
          <h1>WELCOME</h1>
          <h2>To devMaesters</h2>
          <h5>Site is still being built</h5>
          
            <span>Some links are shown below click to visit any of our pages</span>
            <div className="d-flex justify-content-around mb-3">
            <span><Link href={'/blog'}>Blog</Link></span>
            <span ><Link href={'/mini-mall'}>Mini-Mall</Link><FontAwesomeIcon size="1x" icon={faHardHat} /></span>
            </div>
            <div className="d-flex justify-content-around">
            <span ><Link href={'/portfolio/'}>Portfolio</Link></span>
            <span ><Link href={'/online-solver'}>OnlineSolver</Link><FontAwesomeIcon size="1x" icon={faHardHat} /></span>
            </div>
            
            
        </div>
        
      </main>

      <footer className={`text-light text-center ${styles.footer}`}>
        <div>This website was coded and designed by Abubakar Zakari<br /> of @devmaesters.com</div>
      </footer>
    </div>
  );
}
