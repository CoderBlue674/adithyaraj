import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import styles from '../styles/index.module.css'

export default function Home({ allPostsData }) {
  return (
    <html className={styles.background}>
      <link href="https://fonts.googleapis.com/css?family=Cardo:400,700|Oswald" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Archivo+Black|Judson:400,700" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet"></link>
      <div>
        <Link href={"/about"}>
          <a className={styles.about}>About</a>
        </Link>
        <Link href={"/blogposts"}>
          <a className={styles.blogposts}>BLOG</a>
        </Link>
        <h1 className={styles.gradientText}>ADITHYA RAJ</h1>
        <div className = {styles.titleunderline}></div>
      </div>
      
    </html>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
