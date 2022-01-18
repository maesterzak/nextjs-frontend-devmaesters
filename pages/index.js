import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon1.ico" />
        
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <main className={styles.main}>
        <div>
          <h1>WELCOME</h1>
          <h5>PAGE IS STILL BEING BUILT</h5>
        </div>
        <div className="mt-30%">
          <h3 >Some links are shown below, click to visit site</h3>
            <Link className='mr-5%' href='/Blog'>Blog</Link><br />
            <Link href='/mini-mall'>Store</Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
