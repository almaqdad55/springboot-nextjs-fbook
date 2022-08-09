import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Facebook 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/facebook.ico" />
      </Head>
    </div>
  );
}
