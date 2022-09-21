import React from 'react'
import { Link } from './Link'

export { Page }

function Page({ is404 }: { is404: boolean }) {
  if (is404) {
    return (
      <>
        <div className="content-wrapper bg-opacity-5" style={{ backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)) , url("/images/banner__technology__1.jpg")' }}>
            <div className="container min-h-screen text-white font-zenMaru flex flex-col justify-center">
                <h3 className="font-zen text-4xl lg:text-6xl text-nsgreen">404</h3>
                <p className=' text-3xl mb-5'>Whoops!, the page you were looking for,<br /> could not be found.</p>
                <Link href='/' className='btn-type1'>home</Link>
            </div>
        </div>

      </>
    )
  } else {
    return (
      <>
        <h1>500 Internal Server Error</h1>
        <p>Something went wrong.</p>
      </>
    )
  }
}
