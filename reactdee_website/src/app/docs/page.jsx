import styles from './docs.module.css'

export default function docs () {
  return (
    <div className={styles.article}>
      <div className={styles.content}>

        <p>
          Bienvenidos a ReactDee!
        </p>
        <br />

        <p>
          Este catalogo se basa en la máxima simplicidad a la hora de implementar componentes. De manera que la creación de una aplicación con React que no necesite de gran personalización, y que busque la simplicidad, sea rápida y sencilla.
        </p>
        <br />

        <p>
          Aqui encontrarás componentes ReactDee for use.
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