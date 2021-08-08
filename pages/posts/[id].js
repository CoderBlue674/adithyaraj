import { getAllPostIds, getPostData } from '../../lib/posts'
import styles from '../../styles/blogposts.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Post({ postData }) {
  return (
    <html className = {styles.background}>
      <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet"></link>
      <body className = {styles.body}>
      <div>
            <Link href={'/blogposts'}>
              <a className = {styles.backbutton}>⇐</a>
            </Link>
      </div>
        <h1 className = {styles.title}> {postData.title}</h1>
        <div className = {styles.body}>
          <div className = {styles.posttext} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </body>
    </html>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}