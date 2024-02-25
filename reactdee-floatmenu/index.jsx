'use client'
/* eslint-disable react/prop-types */

import moduleStyles from './style.module.css'

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
    s: 2,
    m: 3,
    l: 4,
    xl: 5
  }

  // variables for CSS
  const rootElement = document.documentElement
  const stylesFloatMenu = {
    '--fontSizeFloatMenu': `${fontSizesConstants[fontSize]}dvw`,
    '--colorFontFloatMenu': colorFont,
    '--colorBackgroundFloatMenu': colorBackground,
    '--colorHoverFloatMenu': colorHover
  }
  for (const [property, value] of Object.entries(stylesFloatMenu)) {
    rootElement.style.setProperty(property, value)
  }

  // component construction ready for use
  return (
    <nav
      className={`aaaa ${moduleStyles.container}`}
    >
      {elements.map(({ img, text, url }) => (
        <div
          className={`elementForHover ${moduleStyles.element}`}
          key={text}
          onClick={() => { window.open(url) }}
        >
          <img
            src={img}
            alt=''
            className={moduleStyles.image}
          />
          <p>{text}</p>
        </div>
      ))}
    </nav>
  )
}
