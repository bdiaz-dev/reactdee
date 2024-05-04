'use client'
/* eslint-disable react/prop-types */

import moduleStyles from './style.module.css'
import { useState } from 'react'

const Element = ({ colorHover, colorBackground, fontSize, url, children }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className={moduleStyles.element}
      onClick={() => { window.open(url) }}
      onMouseOver={() => { setIsHovered(true) }}
      onMouseOut={() => { setIsHovered(false) }}
      style={{
        backgroundColor: isHovered ? colorHover : colorBackground,
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        fontSize
      }}
    >
      {children}
    </div>
  )
}

export default function FloatMenu ({
  // edit here the component colors
  // you can use literal names of colors, rgba or hex
  colorFont = 'black',
  colorBackground = 'lightblue',
  colorHover = 'rgba(0, 0, 120, 0.5)',
  fontSize = 's',

  // edit this objets array with your icons, titles and URLs.
  // you can add or remove elements
  elements = [
    {
      text: 'Godot',
      img: 'https://www.svgrepo.com/show/341856/godot-engine.svg',
      url: 'https://godotengine.org/'
    },
    {
      text: 'Unity',
      img: 'https://www.svgrepo.com/show/473818/unity.svg',
      url: 'https://unity.com/'
    },
    {
      text: 'Unreal Engine',
      img: 'https://www.svgrepo.com/show/443515/brand-unreal-engine.svg',
      url: 'https://www.unrealengine.com/'
    },
    {
      text: 'Game Maker',
      img: 'https://www.svgrepo.com/show/373756/light-gamemaker2.svg',
      url: 'https://gamemaker.io/'
    }
  ]
}) {
  // Preconfigurated Font Sizes
  const fontSizesConstants = {
    xs: 1,
    s: 1.5,
    m: 2,
    l: 2.5,
    xl: 3
  }

  // component construction ready for use
  return (
    <nav
      className={`aaaa ${moduleStyles.container}`}
      style={{
        color: colorFont
      }}
    >
      {elements.map(({ img, text, url }) => (
        <Element
          key={text}
          colorHover={colorHover}
          colorBackground={colorBackground}
          fontSize={`${fontSizesConstants[fontSize]}em`}
          url={url}
        >
          <img
            src={img}
            alt=''
            className={moduleStyles.image}
          />
          <p>{text}</p>
        </Element>
      ))}
    </nav>
  )
}
