'use client'

import styles from '../docs.module.css'
import CodeBox from 'reactdee-codebox'
import Link from 'next/link'
// import Gallery from 'reactdee-gallery'

export default function FloatMenuPage () {
  return (
    <div className={styles.article}>
      <div className={styles.content}>

        <h1 id='start'>
          FloatMenu
        </h1>
        <br />

        <p>
          {`This component is a simple code box where you can easily display code snippets to your users, along with a button that allows easy copying of the code.`}
        </p>
        <br />

        <h3 id='implementation'>
          Implementation:
        </h3>
        <br />

        <p>
          For installing the component in your project, you have two options in all Reactdee components.
        </p>
        <br />

        <p>
          1- Install from npm:
        </p>
        <br />
        {/* <div className={styles.codesContainer}> */}
        <CodeBox width={'95%'}>
          {
            `
  $ npm i reactdee-codebox
              `
          }
        </CodeBox>
        {/* </div> */}
        <br />

        <p>
          2- Copying the code directly from our repository.
        </p>
        <br />

        <p>
          <a href="https://github.com/reactdee/codebox">https://github.com/reactdee/codebox</a>
        </p>
        <br />

        <p>
          Once your have it installed you can import in the usual way.
        </p>
        <br />

        <CodeBox width={'95%'}>
          {
            `
  import CodeBox from 'reactdee-codebox'
            `
          }
        </CodeBox>
        <br />

        <p>
          We place the component whitin our application.
        </p>
        <br />

        <CodeBox width={'95%'}>
          {
            `
  export default function App () {
    return (
      <>
      <CodeBox></CodeBox>
      </>
    )
  }
            `
          }
        </CodeBox>
        <br />

        <p>
          {`In order to use this component, we need to include the code we want to display inside it as "children" with the following structure:`}
        </p>
        <br />

        <CodeBox width={'95%'}>
          {
            `
      <CodeBox>
        {
          \`
  const yourCode = () => {
    const text = "you can write your code with the idents that you need and the component will conserve it"
    if (true) {
      you can do this
    }
  }
    
  export default yourCode
          \`
        }
      </CodeBox>
            `
          }
        </CodeBox>
        <br />

        <p className={styles.anotations}>
          * We can also do it with a variable that maintains the described structure. In this case, we recommend using imported variables. This allows writing the code to be displayed in separate files and avoiding long and complicated source code.
        </p>
        <br />


        <h3 id='configuration'>
          Configurations:
        </h3>
        <br />

        <p>
          {`This component comes with a default conservative aesthetic of black background and white font. However, we can use some configurations to give it a more personal touch or match the style of our application.`}
        </p>
        <br />
        <p>
          {`As with the rest of ReactDee components, we will use props for configuration.`}
        </p>
        <br />
        <p>
          {`For color configurations, we can use literal color names ('white'), hexadecimal codes ('#E15537'), or rgba ('rgba(13, 57, 95, 0.295)').`}
        </p>
        <br />
        <p>
          {`And for size configurations, we have total freedom of scaling using numbers from '0.1' to whatever we consider appropriate, but we do not recommend using more than '2' for any of them.`}
        </p>
        <br />
        <p className={styles.anotations}>
          {`Remember that you can add as many configurations as you want, and those that are not added will use their default settings.`}
        </p>
        <br />

        <h4>
          - Colors
        </h4>
        <br />

        <ul className={styles.configurations}>
          <li>
            <b>
              colorCode
            </b>
          </li>
          <li>
            <b>
              colorBackground
            </b>
          </li>
          <li>
            <b>
              colorButton
            </b>
          </li>
          <li>
            <b>
              colorButtonHover
            </b>
          </li>
          <li>
            <b>
              colorButtonText
            </b>
          </li>
          <li>
            <b>
              colorButtonIco
            </b>
          </li>
        </ul>
        <br />

        <CodeBox width={'95%'}>
          {
            `
  export default function App () {
    return (
      <>
        <CodeBox 
          colorCode = 'rgba(0, 0, 255, 1)'
          colorBackground = rgb(0,0,0)
          colorButton = 'red'
          colorButtonHover = '#d3d3d3'
          colorButtonText = 'rgb(10,10,10)'
          colorButtonIco = 
        >
         {
          \`
  const yourCode
          \`
         }
        </CodeBox>
      </>
    )
  }
            `
          }
        </CodeBox>

        <br />

        <h4>
          - Sizes
        </h4>
        <br />

        <ul className={styles.configurations}>
          <li>
            <b>
              buttonSize
            </b>
          </li>
          <li>
            <b>
              fontSize
            </b>
          </li>
        </ul>
        <br />

        <CodeBox width={'95%'}>
          {
            `
  export default function App () {
    return (
      <>
        <CodeBox 
          buttonSize = '1'
          fontSize = '1'
        >
        {
          \`
  const yourCode
          \`
        }
        </CodeBox>
      </>
    )
  }
            `
          }
        </CodeBox>
        <br />

        <hr />
        <br />

        <h3 id='example'>
          {`Here's an example of complete code:`}
        </h3>
        <br />

        <CodeBox
          width={'95%'}
        >
          {
            `
  
  import CodeBox from 'reactdee-codebox'
  
  const elements = {
    home: {
      title: 'Home',
      url: https://mywebsite.com/home,
    },
    company: {
      title: 'Company',
      onClick: () => { handleCompany() },
      subElements: {
        history: {
          title: 'Our history',
          onClick: () => { handleHistory() }
        },
        gallery: {
          title: 'Images gallery',
          url: "https://mywebsite.com/gallery
        }
      }
    }
  }
            
  export default function App () {
    return (
      <>
        <HeadMenu
          elements = {elements}
          colorLink = 'rgba(0, 0, 255, 1)'
          colorHover = 'red'
          colorBackground = '#d3d3d3'
          colorOpenTag = 'rgb(10,10,10)'
          size = 's'
          menuAlign = 'end'
          logo = 'https://www.svgrepo.com/show/439290/react.svg'
          logoAlign = 'start'
        />
      </>
    )
  }
            `
          }
        </CodeBox>
        <br />

        <hr />
        <p className={styles.articleSign}>
          Components ReactDee for use.
        </p>

      </div>
      <ul className={styles.articleSections}>
        <b>On this page</b>
        <li>
          <a href="#start">Start</a>
        </li>
        <li>
          <a href="#implementation">Implementation</a>
        </li>
        <li>
          <a href="#configuration">Configuration</a>
        </li>
        <li>
          <a href="#example">Example of complete code</a>
        </li>
      </ul>
    </div>
  )
}