import React from 'react'

export { Page }

export const documentProps = {
  // This title and description will override the defaults
  title: 'About SpaceX',
  description: 'Our mission is to explore the galaxy.'
}

function Page() {
  return (
    <>
      <h1 className=' text-green-700 text-5xl'>About</h1>
      <p>
        Demo using <code>vite-plugin-ssr</code>.
      </p>
    </>
  )
}
