import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>devmaesters</title>
        <meta name="description" content="Welcome to devmaesters.com we offer free programming tips, tricks and coding support." />
        <meta name="keywords" content="programming, nextjs, reactjs, coding, websites, python tutorials, prisma, graphql, django, django rest framework" />
        <link rel="icon" href="/favicon1.ico" />
        
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <main className={styles.main}>
        <Image layout="fill" src={'/images/home-3.jpg'} alt="homepage image" />
        <div className="position-absolute top-2 text-bold">
          <h1>WELCOME</h1>
          <h5>PAGE IS STILL BEING BUILT</h5>
          <div className="d-grid justify-content-center">
            <span>Some links are shown below click to visit page</span>
            <span><Link href={'/Blog'}>Blog</Link></span>
            <span><Link href={'/mini-mall'}>Mini-Mall</Link></span>
          </div>
        </div>
        
      </main>

      <footer className={`text-light text-center ${styles.footer}`}>
        <span>This website was coded and designed by Abubakar Zakari<br /> of @devmaesters.tk</span>
      </footer>
    </div>
  );
}
