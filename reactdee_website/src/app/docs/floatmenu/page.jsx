// 'use client'

import styles from '../docs.module.css'
import CodeBox from 'reactdee-codebox'
import FloatMenu from 'reactdee-floatmenu'

export default function FloatMenuPage () {
  return (
    <div className={styles.article}>
      <div className={styles.content}>

        <h1 id='start'>
          FloatMenu
        </h1>
        <br />

        <p>
          {`With this component you can have a very simple menu to access other web pages. With the corresponding logo on each link and growth effect on hover.`}
        </p>
        <br />

        <h3>Preview</h3>
        <br />

        <FloatMenu
          // colorFont='white'
          colorBackground='lightblue'
          colorHover='rgb(14, 187, 200)'
          fontSize='s'
        />
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
  $ npm i reactdee-floatmenu
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
          <a className={styles.literalLinks} href="https://github.com/reactdee/floatmenu">https://github.com/reactdee/floatmenu</a>
        </p>
        <br />

        <p>
          Once your have it installed you can import in the usual way.
        </p>
        <br />

        <CodeBox width={'95%'}>
          {
            `
  import FloatMenu from 'reactdee-floatmenu'
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
        <FloatMenu />
      </>
    )
  }
            `
          }
        </CodeBox>
        <br />

        <p>
          {`To use this component we will have to create an array with the elements we want to display. With the following structure:`}
        </p>
        <br />

        <CodeBox width={'95%'}>
          {
            `
  const elements = [
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
  
  export default function App () {
    return (
      <>
        <FloatMenu 
          elements = {elements}
        />
      </>
    )
  }
            `
          }
        </CodeBox>
        <br />
        <p className={styles.anotations}>
          👉 You can use as many elements as you need. Just add or remove more objects to the array.
        </p>
        <br />


        <h3 id='configuration'>
          Configurations:
        </h3>
        <br />

        <p>
          {`This component comes with a default style. But we can modify them according to our needs.`}
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
          {`And for the size configuration, we have five options: "xs", "s", "m", "l" or "xl".`}
        </p>
        <br />
        <p className={styles.anotations}>
          {`💭 Remember that you can add as many configurations as you want, and those that are not added will use their default settings.`}
        </p>
        <br />

        <ul className={styles.configurations}>
          <li>
            <b>
              colorFont
            </b>
          </li>
          <li>
            <b>
              colorBackground
            </b>
          </li>
          <li>
            <b>
              colorHover
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
        <FloatMenu 
          elements = {elements}
          colorFont = 'black'
          colorBackground = 'lightblue'
          colorHover = 'rgba(0, 0, 120, 0.5)'
          fontSize = 's'
        />
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
          colorButtonHover='rgb(14, 187, 200)'
        >
          {
            `
  
  import FloatMenu from 'reactdee-floatmenu'
  
  const elements = [
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
            
  export default function App () {
    return (
      <>
        <FloatMenu 
          elements = {elements}
          colorFont = 'black'
          colorBackground = 'lightblue'
          colorHover = 'rgba(0, 0, 120, 0.5)'
          fontSize = 's'
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