import Image from "next/image"
import styles from "./page.module.css"

export default function Home () {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/reactdee_logo.png"
            alt="ReactDee Logo"
            width={110}
            height={110}
            priority
          />
          <p>ReactDee <span>By BrunoDiaz.es</span></p>
        </div>

        <div className={styles.welcomeText}>
          <p>
            Simply, easy, and ready for use React Components for your apps.
          </p>
        </div>
      </div>



      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs
          </h2>
          <p>How can we use ReactDee?</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Show Room
          </h2>
          <p>Here you can see our components working. *Temporaly not working*</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Repo
          </h2>
          <p>
            Go to this OpenSource project repository.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Meet me
          </h2>
          <p>Visit Bruno Diaz website.</p>
        </a>
      </div>
    </main>
  )
}
