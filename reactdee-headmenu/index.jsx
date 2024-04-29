/* eslint-disable react/prop-types */

'use client'

import { useRef, useEffect } from 'react'
import moduleStyles from './style.module.css'

/**
  This component is designed with anchor tags (<a></a>) for element`s urls.
  If you are using "React Router Dom", "NextJs" or similar routing you need
  to change anchors by Link tags. Uncomment the import you need for this.
  Or write that you need if it is another library.
*/
export default function HeadMenu ({
  /**
    Edit here with your prefer colors.
    You can use literal color name, rgba or hex.
  */
  // colors = {
  colorLink = 'white', // 'rgba(0, 0, 255, 1)',
  colorHover = 'pink', // 'red',
  colorBackground = 'black', // '#d3d3d3',
  colorOpenTag = 'red', // 'rgb(0,0,0)'
  // },

  /**
    Here you can configure de component.
    * align four
  */
  // **** CONFIGURATION ****
  size = 's', // valid options: 's' - 'm' - 'l' - 'xl' - 'xxl'
  menuAlign = 'end', // valid options: 'start' - 'center' - 'end' - 'space-around'
  logo = 'https://www.svgrepo.com/show/374035/reactts.svg', // your logo
  logoAlign = 'start', // valid options: 'start' - 'end'
  // **********************

  /**
    Edit this object with elements of your needed menu.
    Parents are principal elements, and inside there is each sub-element.
    If the section doesn´t have sub-elemnts let null value.
  */
  elements = {
    home: {
      title: 'Home',
      url: '',
      subElements: null
    },
    company: {
      title: 'Company',
      url: '',
      subElements: {
        history: {
          title: 'Our history',
          url: ''
        },
        gallery: {
          title: 'Images gallery',
          url: ''
        }
      }
    },
    services: {
      title: 'Services',
      url: '',
      subElements: {
        marketing: {
          title: 'Marketing',
          url: ''
        },
        outsourcing: {
          title: 'Outsorcing',
          url: ''
        },
        logistics: {
          title: 'Logistics',
          url: ''
        }
      }
    },
    contact: {
      title: 'Contact',
      url: '',
      subElements: null
    }
  }
}) {
  //
  //
  // ** START OF CONSTANTS ************************************************************************
  //
  /*
    Here are the constants and functions for correctly work of component.
    Its all preconfigured.
    Not necesary editing.
    For easyest workflow, you can fold them.
  */
  const fontConstants = {
    s: 0.8,
    m: 1,
    l: 1.2,
    xl: 1.4,
    xxl: 1.6
  }

  const rootElement = document.documentElement
  const hoverLink = [`0 0 15px ${colorHover}, 0 0 15px ${colorHover}, 0 0 15px ${colorHover}`, `0 0 0 ${colorHover}`]

  const CSSvars = {
    '--hoverLinkHeadMenu': hoverLink[0],
    '--colorBackgroundHeadMenu': colorBackground,
    '--colorLinkHeadMenu': colorLink,
    '--menuAlignHeadMenu': menuAlign,
    '--colorOpenTagHeadMenu': colorOpenTag,
    '--fontSizeMenuHeadMenu': `${fontConstants[size]}em`,
    '--fontSizeMenuResponsiveHeadMenu': `${fontConstants[size] * 1.2}em`
  }


  useEffect(() => {
    for (const [property, value] of Object.entries(CSSvars)) {
      rootElement.style.setProperty(property, value)
    }
  }, [])

  const handleHover = (e) => {
    if ((window.visualViewport.width < 1000) && (e.target.querySelector('ul').style.transform === 'scale(1, 1)')) {
      e.target.querySelector('ul').style.transform = 'scale(1, 0)'
      setTimeout(() => {
        e.target.querySelector('ul').style.position = 'absolute'
        e.target.style.writingMode = 'vertical-rl' // TODO : PLEGADO AUTOMATICO EN CAMBIO DE RESOLUCION Y CERRADO DE MENU
      }, '350')
    } else {
      if (e.target.querySelector('ul')) {
        if (window.visualViewport.width < 1000) {
          e.target.querySelector('ul').style.position = 'relative'
          e.target.style.writingMode = 'horizontal-tb'
        }
        e.target.querySelector('ul').style.transform = 'scale(1, 1)'
      }
    }
  }

  const handleOpenResponsive = () => {
    menuResponsiveRef.current.style.right = (menuResponsiveRef.current.style.right === '0px')
      ? '-25em'
      : '0px'
    document.querySelectorAll('[class^="_subMenu"]').forEach((i) => {
      console.log(i)
      if (i.style.transform === 'scale(1, 1)') {
        i.style.transform = 'scale(1,0)'
        setTimeout(() => {
          i.style.position = 'absolute'
          i.parentElement.style.writingMode = 'vertical-rl' // TODO : PLEGADO AUTOMATICO EN CAMBIO DE RESOLUCION Y CERRADO DE MENU
        }, '350')
      }
    })
  }

  const handleClick = (el) => {
    if (el.hasOwnProperty('onClick')) {
      el.onClick()
    } else if (el.hasOwnProperty('url')) {
      window.location.href = el.url
    } else {
      throw new Error('>> CLICKED ELEMENT DON´T HAVE ANY ACTIONS <<')
    }
  }

  const menuResponsiveRef = useRef()
  //
  //
  // ** END OF CONSTANTS *********************************************************************
  //

  /*
  Here is the component construction.
  There is some possible changes. They are commenteds
  */
  return (
    <>
      <ul
        className={moduleStyles.menu}
      >
        {
          logo &&
          <img // If you use 'NextJs', remember you can use Image tag for better performance.
            className={(logoAlign === 'start') ? moduleStyles.logoStart : moduleStyles.logoEnd}
            src={logo}
            alt='logo'
          />}
        {Object.entries(elements).map((element) => {
          return (
            <li
              className={moduleStyles.element}
              key={element[0]}
            >
              <a // change this tag for Link if you use routing (remember the closer)
                className={moduleStyles.a}
                onClick={() => handleClick(element[1])}
              >
                {element[1].title}
              </a>
              {(element[1].subElements) &&
                <ul
                  className={moduleStyles.subMenu}
                >
                  {Object.entries(element[1].subElements).map((subElement) => {
                    return (
                      <li
                        key={subElement[1].title} className={moduleStyles.subElement}
                      >
                        <a // change this tag for Link if you use routing (remember the closer)
                          onClick={() => handleClick(element[1])}
                          className={moduleStyles.a}
                        >
                          {subElement[1].title}
                        </a>
                      </li>
                    )
                  })}
                </ul>}
            </li>
          )
        })}
      </ul>
      {/* ************************* Responsive construction ************************ */}
      <ul
        className={moduleStyles.menuResponsive}
        ref={menuResponsiveRef}
      >
        <img
          className={moduleStyles.responsiveMenuButton}
          src='https://www.svgrepo.com/show/532195/menu.svg'
          alt='menu_button'
          onClick={handleOpenResponsive}
        />
        {
          Object.entries(elements).map((element) => {
            return (
              <li
                key={element[0]}
                className={moduleStyles.responsiveElement}
              >
                <a // change this tag for Link if you use routing (remember the closer)
                  onClick={() => handleClick(element[1])}
                  className={moduleStyles.a}
                >
                  {element[1].title}
                </a>
                {(element[1].subElements) &&
                  <b
                    onClick={(e) => handleHover(e)}
                    className={moduleStyles.v}
                  >
                    V
                    {(element[1].subElements) &&
                      <ul
                        className={moduleStyles.subMenu}
                      >
                        {Object.entries(element[1].subElements).map((subElement) => {
                          return (
                            <li
                              key={subElement[1].title} className={moduleStyles.subElement}
                            >
                              <a // change this tag for Link if you use routing (remember the closer)
                                onClick={() => handleClick(element[1])}
                                className={moduleStyles.a}
                              >
                                {subElement[1].title}
                              </a>
                            </li>
                          )
                        })}
                      </ul>}
                  </b>}
              </li>
            )
          })
        }
      </ul>
    </>
  )
}
