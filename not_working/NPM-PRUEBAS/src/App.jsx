// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import CodeBox from 'reactdee-codebox'
import Gallery from 'reactdee-gallery'
import HeadMenu from 'reactdee-headmenu'
// import FloatMenu from 'reactdee-floatmenu'

function App () {
  const elements = {
    home: {
      title: 'casa',
      url: ''
    },
    empresa: {
      title: 'empresa',
      subElements: {
        historia: {
          title: 'historia',
          url: ''
        }
      }
    }
  }
  return (
    <>
      <HeadMenu elements={elements} />
      <CodeBox>
        {`
      // esto es codigo
      <code>
      `}
      </CodeBox>
      {/* <FloatMenu /> */}
      <Gallery />
      {/* <SyntaxHighlighter>
        {`
        code
        `}
      </SyntaxHighlighter> */}
    </>
  )
}

export default App
