// 'use client'

import styles from './docs.module.css'
import { redirect } from 'next/navigation'


export default function docs () {
  redirect('/docs/home', 'replace')


  return (
    <div className={styles.article}>
      <div className={styles.content}>

        <h1>
          Welcome to ReactDee!
        </h1>
        <br />

      </div>
    </div>
  )
}