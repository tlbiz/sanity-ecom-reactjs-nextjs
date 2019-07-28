import Head from 'next/head'
import Link from 'next/link'
import globalStyles from './styles/global'
import styles from './styles/layout'
import GithubCorner from './GithubCorner'

export default props => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>TechAZ = 💖</title>
    </Head>
    <nav>
      <Link href="/"><a>Home</a></Link>
      <Link href="/products"><a>Products</a></Link>
    </nav>
    <GithubCorner />
    <div id="main">
      {props.children}
    </div>
    <footer>
      TechAZ + ReactJS
      =
      💖
    </footer>
    <style jsx>{styles}</style>
    <style jsx global>{globalStyles}</style>    
  </div>
)