import Link from 'next/link'
import styles from '../styles/about.module.css'

export default function Home() {
  return (
      <html className={styles.background}>
          <link href="https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2"></link>
          <link href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet"></link>
        <div>
            <Link href={'/'}>
              <a className={styles.back}>⇐</a>
            </Link>
        </div>
          <h1 className={styles.about2}>ABOUT ME<br/></h1>
          <body className = {styles.body}>
              Hello, I am an 8th Grader in Washington, and I love Biology.
              This blog will be focused on the following topics: <br/>
              - Academics <br/>
              - USABO (USA Biology Olympiad) Concepts <br/>
              - Extracurriculars <br/>
              - AMC 10/12 Concepts <br/>
              - Volunteering Services and Programs <br/>
              - Other Experiences<br/>
              Speaking of volunteering, I'm working with  a non-profit charity 
              called Luv Michael. They train, educate, and employ autistic 
              adults at their bakery in NYC. They also educate volunteers like me 
              about how to be more accepting of the autistic community. Our service 
              is to share that information with our family and friends. I'm becoming 
              a certified autism advocate. I  just learned that 90% of the adult autistic 
              community is unemployed or underemployed. Autism is affecting 1 in 50 
              families. In addition to sharing the information we are seeking support 
              for the cause. If you’re able to donate they will send you some of their 
              amazing handmade granola and a handwritten thank you. Your help allows their 
              mission to expand and give autistic adults more employment opportunities. 
              Please consider donating to this amazing cause through my campaign page. It
              would mean so much to their mission and to me. Copy and paste the link in a new tab to donate. <br/><br/>
              https://secure.givelively.org//donate/luv-michael-inc/the-luv-michael-challenge/adithya-raj
          </body>
      </html>
  )
}