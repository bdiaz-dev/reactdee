'use client'

/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import styles from './style.module.css'

export default function CodeBox ({
  children = 'here your code',
  colorBackground = 'black',
  colorCode = 'white',
  colorButton = 'grey',
  colorButtonHover = 'blue',
  colorButtonText = 'white',
  colorButtonIco = 'white',
  fontSize = '1',
  buttonSize = '0.7',
  width = '80%'
}) {
  // **********
  const rootElement = document.documentElement

  const CSSvars = {
    '--colorBackgroundCodeBox': colorBackground,
    '--colorCodeCodeBox': colorCode,
    '--colorButtonCodeBox': colorButton,
    '--colorButtonHoverCodeBox': colorButtonHover,
    '--colorButtonTextCodeBox': colorButtonText,
    '--fontSizeCodeBox': `${fontSize}em`,
    '--buttonSizeCodeBox': `${buttonSize}rem`
  }

  useEffect(() => {
    for (const [property, value] of Object.entries(CSSvars)) {
      rootElement.style.setProperty(property, value)
    }
  }, [])

  const [copyText, setCopyText] = useState('Copy')
  const handleCopy = () => {
    navigator.clipboard.writeText(children)
    setCopyText('Copied!')
    setTimeout(() => { setCopyText('Copy'); document.activeElement.blur() }, 2000)
  }
  return (
    <div className={styles.codeBox} style={{ width: width }}>
      <button className={styles.copyButton} onClick={handleCopy}>
        {copyText}
        <svg className={styles.copyButtonIco} fill={`${colorButtonIco}`} width={`${buttonSize * 20}px`} viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><path d='M13.49 3 10.74.37A1.22 1.22 0 0 0 9.86 0h-4a1.25 1.25 0 0 0-1.22 1.25v11a1.25 1.25 0 0 0 1.25 1.25h6.72a1.25 1.25 0 0 0 1.25-1.25V3.88a1.22 1.22 0 0 0-.37-.88zm-.88 9.25H5.89v-11h2.72v2.63a1.25 1.25 0 0 0 1.25 1.25h2.75zm0-8.37H9.86V1.25l2.75 2.63z' /><path d='M10.11 14.75H3.39v-11H4V2.5h-.61a1.25 1.25 0 0 0-1.25 1.25v11A1.25 1.25 0 0 0 3.39 16h6.72a1.25 1.25 0 0 0 1.25-1.25v-.63h-1.25z' /></svg>
      </button>
      <pre className={styles.pre}>
        <code className={styles.code}>
          {
            `${children}`
          }
        </code>
      </pre>
    </div>
  )
}
