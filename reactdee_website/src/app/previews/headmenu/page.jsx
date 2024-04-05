import HeadMenu from 'reactdee-headmenu'

export default function HeadMenuPreviewPage () {
  return (
    <div
      style={{ backgroundColor: 'white' }}
    >
      <title>HeadMenu Preview</title>
      <HeadMenu
        align={'right'}
        logoAlign={'right'}
      />
    </div>
  )
}