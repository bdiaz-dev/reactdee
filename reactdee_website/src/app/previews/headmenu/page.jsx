// 'use client'

import HeadMenu from 'reactdee-headmenu'

export const metadata = {
  title: "ReactDee - HeadMenu Preview",
  description: "Simply, easy, and ready for use React Components for your apps.",
}

export default function HeadMenuPreviewPage () {
  return (
    <div
      style={{ backgroundColor: 'white' }}
    >
      <title>HeadMenu Preview</title>
      <HeadMenu
        menuAlign={'end'}
        logoAlign={'start'}
        size={'m'}
        colorOpenTag={'rgb(12, 136, 160)'}
      />
    </div>
  )
}