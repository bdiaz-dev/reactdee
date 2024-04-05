import Gallery from 'reactdee-gallery'
import styles from '../docs.module.css'
import CodeBox from 'reactdee-codebox'

export default function GalleryPage () {
  return (
    <div className={styles.article}>
      <div className={styles.content}>

        <h1
          id='start'
        >
          Gallery
        </h1>

        <br />
        <p>
          {`          With this component, you'll be able to embed a gallery into your application to showcase the images you desire. No additional configurations are needed, and it offers a user-friendly and intuitive interface, making it easy to add more vibrancy to your project.`
          }
        </p>

        <br />

        <p>
          {`          You can view the images in thumbnail version in a horizontal list, preview them at the top, or, upon clicking the latter, view them in full-screen mode.`}
        </p>

        <br />

        <p>
          {`It's designed to seamlessly adapt to any screen type, including touchscreens.`}
        </p>

        <br />

        <h3>Example:</h3>

        <Gallery />

        <h3 id='implementation'>Implementation:</h3>
        <br />

        <p>
          For installing the component in your project, you have two options in all Reactdee components.
        </p>
        <br />

        <p>
          1- Install from npm:
        </p>
        <br />

        <CodeBox width={'95%'}>
          {
            `
  npm i reactdee-headmenu
              `
          }
        </CodeBox>
        <br />

        <p>
          2- Copying the code directly from our repository:
        </p>
        <br />

        <p>
          <a href="https://github.com/reactdee/headmenu" style={{ color: 'lightblue', textDecoration: 'underline' }}>
            https://github.com/reactdee/headmenu
          </a>
        </p>
        <br />

        <p>
          Once we have it installed, we can import it in the usual way.
        </p>
        <br />

        <CodeBox width={'95%'}>
          {
            `
  import Gallery from 'reactdee-gallery'
            `
          }
        </CodeBox>
        <br />

        <p>
          We place the component within our application.
        </p>
        <br />

        <CodeBox width={'95%'}>
          {
            `
    export default function App () {
      return (
        <>
          <Gallery />
        </>
      )
    }
    `
          }
        </CodeBox>
        <br />

        <p>
          {`And to insert the photos we want to display in the gallery, we'll create an object with the following structure:`}
        </p>
        <br />

        <CodeBox width={'95%'}>
          {
            `
    const images = [
      {
        alt: 'image1',
        title: 'author: Ben Moore',
        src: 'https://picsum.photos/id/102/4320/3240'
      },
      {
        alt: 'image2',
        title: 'author: Ilham Rahmansyah',
        src: 'https://picsum.photos/id/103/2592/1936'
      },
      {
        alt: 'image3',
        title: 'author: Dyaa Eldin',
        src: 'https://picsum.photos/id/104/3840/2160'
      }
    ]
    `
          }
        </CodeBox>
        <br />

        <p>
          {`And we'll add it as "images" prop of the Gallery component.`}
        </p>
        <br />

        <CodeBox width={'95%'}>
          {
            `
    export default function App () {
      return (
        <>
          <Gallery 
            images={images}
          />
        
        </>
      )
    }
    `
          }
        </CodeBox>
        <br />

        <p>
          {`And with just this, we'll have this simple yet functional gallery implemented in our application.`}
        </p>
        <br />
        <hr />
        <br />

        <h3 id='example'>{`Here's an example of complete code:`}</h3>
        <br />

        <CodeBox width={'95%'}>
          {
            `
    import Gallery from 'reactdee-gallery'
    
    const images = [
      {
        alt: 'image1',
        title: 'author: Ben Moore',
        src: 'https://picsum.photos/id/102/4320/3240'
      },
      {
        alt: 'image2',
        title: 'author: Ilham Rahmansyah',
        src: 'https://picsum.photos/id/103/2592/1936'
      },
      {
        alt: 'image3',
        title: 'author: Dyaa Eldin',
        src: 'https://picsum.photos/id/104/3840/2160'
      }
    ]
    
    export default function App () {
      return (
        <>
          <Gallery 
            images={images}
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
        <b className={styles.sideTitles}>On this page</b>
        <li>
          <a href="#start">Start</a>
        </li>
        <li>
          <a href="#implementation">Implementation</a>
        </li>
        <li>
          <a href="#example">Example of complete code</a>
        </li>
      </ul>
    </div>
  )
}