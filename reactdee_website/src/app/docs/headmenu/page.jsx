import styles from '../docs.module.css'

export default function docs () {
  return (
    <div className={styles.article}>
      <div className={styles.content}>

        <h1>
          HeadMenu
        </h1>
        <br />

        <p>
          Componente de menu de cabecera
        </p>
        <br />

        <p>
          Componentes ReactDee for use.
        </p>

      </div>
      <ul className={styles.articleSections}>
        <b>On this page</b>
        <li>
          a
        </li>
        <li>
          a
        </li>
        <li>
          a
        </li>
      </ul>
    </div>
  )
}