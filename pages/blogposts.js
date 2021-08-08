import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import styles from '../styles/blogposts.module.css'

export default function Home({ allPostsData }) {
  return (
    <html className={styles.background}>
          <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet"></link>
          <Link href="/">
          <a className={styles.backbutton}>⇐</a>
          </Link>
          <h1 className={styles.title}>BLOG POSTS</h1>
          <ul>
              {allPostsData.map(({ id, date, title }) => (
                  <Link href={`/posts/${id}`}>
                      <a>
                          <div className={styles.postslist}>
                              <li className={styles.text} key={id}>
                                  <p>
                                      <span className={styles.leftside}>{title}</span>
                                      <span className={styles.rightside}>{date}</span>
                                  </p>
                              </li>
                          </div>
                      </a>
                  </Link>
              ))}
          </ul>
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
