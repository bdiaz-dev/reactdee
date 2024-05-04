// 'use client'

import styles from '../docs.module.css'
import CodeBox from 'reactdee-codebox'
import Link from 'next/link'
import FloatMenu from 'reactdee-floatmenu'
// import Gallery from 'reactdee-gallery'

export default function HeadMenuPage () {
  return (
    <div className={styles.article}>
      <div className={styles.content}>

        <h1 id='start'>
          HeadMenu
        </h1>
        <br />

        <p>
          {`With this component, you'll be able to have a complete header menu in your application. Fixed on the screen, collapsible, ready for responsiveness, and highly customizable.`}
        </p>
        <br />
        <br />

        <FloatMenu
          fontSize='s'
          colorHover='rgb(14, 187, 200)'
          // colorBackground='white'
          elements={
            [
              {
                text: 'Click here to preview',
                img: 'https://www.svgrepo.com/show/4494/preview.svg',
                url: '/previews/headmenu'
              }
            ]
          }
        />

        {/* <Link href={'/previews/headmenu'} target='blank'><span className={styles.anotations}>PREVIEW</span></Link> */}
        <br />
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
  $ npm i reactdee-headmenu
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
          <a href="https://github.com/reactdee/headmenu">https://github.com/reactdee/headmenu</a>
        </p>
        <br />

        <p>
          Once your have it installed you can import in the usual way.
        </p>
        <br />

        <CodeBox width={'95%'}>
          {
            `
  import HeadMenu from 'reactdee-headmenu'
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
        <HeadMenu />
      </>
    )
  }
            `
          }
        </CodeBox>
        <br />

        <p>
          Afterwards, to introduce the elements into the menu, we will create an object with the following instructions.
        </p>
        <br />
        <p className={styles.anotations}>
          {`👉 Pay attention that we can give each element two possible types of executions depending on our needs. If we want to use a simple anchor with a href we will use "url", however, for a callback we will use "onClick".`}
        </p>
        <br />
        <p>
          If neither of them is used, that element will have no action and an alert will appear in the console.
        </p>
        <br />
        <p>
          On the other hand, if we want the element to have child subelements, we must create them within subElements.
        </p>
        <br />
        <p>
          Here is an example:
        </p>
        <br />

        <CodeBox width={'95%'}>
          {
            `
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
            `
          }
        </CodeBox>
        <br />
        <p>
          {`And then you can include this object as "elements" prop of the component.`}
        </p>
        <br />

        <CodeBox width={'95%'}>
          {
            `
  export default function App () {
    return (
      <>
        <HeadMenu 
          elements={elements}
        />
      </>
    )
  }
            `
          }
        </CodeBox>
        <br />
        <br />

        <h3 id='configuration'>
          Configurations:
        </h3>
        <br />

        <p>
          {`Next we can make some configurations to personalize our menu and make it more in line with the aesthetics of our application. `}
        </p>
        <br />
        <p className={styles.anotations}>
          {`💭 If you don't use one, it will stay with its default value`}
        </p>
        <br />

        <h4>
          - Colors
        </h4>
        <br />
        <p>
          You can use literal names, rgba or hex.
        </p>
        <br />

        <ul className={styles.configurations}>
          <li>
            <b>
              colorLink
            </b>
          </li>
          <li>
            <b>
              colorHover
            </b>
          </li>
          <li>
            <b>
              colorBackground
            </b>
          </li>
          <li>
            <b>
              colorOpenTag
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
        <HeadMenu 
          colorLink = 'rgba(0, 0, 255, 1)'
          colorHover = 'red'
          colorBackground = '#d3d3d3'
          colorOpenTag = 'rgb(10,10,10)'
        />
      </>
    )
  }
            `
          }
        </CodeBox>

        <br />

        <h4>
          - Others
        </h4>
        <br />

        <ul className={styles.configurations}>
          <li>
            <b>
              size
            </b>
            <p>
              {`The entire headmenu size. Valid options: 's' - 'm' - 'l' - 'xl' - 'xxl'.`}
            </p>
          </li>
          <li>
            <b>
              menuAlign
            </b>
            <p>
              {`Positioning for menu. Valid options: 'start' - 'center' - 'end' - 'space-around'.`}
            </p>
          </li>
          <li>
            <b>
              logo
            </b>
            <p>
              {`Place for your logo image. If you don´t need, use 'false'. By default there is the React Logo.`}
            </p>
          </li>
          <li>
            <b>
              logoAlign
            </b>
            <p>
              {`Positioning for logo. Valid options: 'start' - 'end'.`}
            </p>
          </li>
        </ul>
        <br />

        <CodeBox width={'95%'}>
          {
            `
  export default function App () {
    return (
      <>
        <HeadMenu 
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
  
  import HeadMenu from 'reactdee-headmenu'
  
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