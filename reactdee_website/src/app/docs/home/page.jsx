import Gallery from 'reactdee-gallery'
import styles from '../docs.module.css'
import CodeBox from 'reactdee-codebox'

export default function DocsHomePage () {
  return (
    <div className={styles.article}>
      <div className={styles.content}>

        <h1
          id='start'
        >
          Welcome to Reactdee
        </h1>

        <br />

        <p>
          {` 
            If you're considering starting a new project but don't want to spend too much time building your components, or if you already have an application and want to add some elements quickly and easily, you're in the right place.
          `}
        </p>

        <br />

        <p>
          {`
          With ReactDee, you'll find very useful components ready to use, where you'll only need to write a few lines indicating the configuration you need, and they'll be up and running.
          `}
        </p>

        <br />

        <p>
          {`
          And on this page, we offer you straightforward documentation to follow where you'll see how easy it is to implement a ReactDee component in your project.
          `}
        </p>

      </div>
      <ul className={styles.articleSections}>
        <b className={styles.sideTitles}>On this page</b>
        <li>
          <a href="#start">Start</a>
        </li>
        <li>
          <a href="#implementation">Implementation</a>
        </li>
        <li>
          <a href="#example">Example of complete code</a>
        </li>
      </ul>
    </div>
  )
}