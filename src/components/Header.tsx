import React from 'react'
import Navbar from './Navbar'
import { Link } from '../../renderer/Link'

type Props = {}

const Header = (props: Props) => {
  return (
    
  <header className="absolute w-full min-w-[320px]">
    <div className="relative container py-[3vw] h-auto min-h-0 flex items-center justify-between space-x-10 ">

      <Link className={'flex-shrink-0'} href="/">
        <img
          className="h-14 lg:h-16 aspect-auto align-middle"
          src="/images/ns__logo__trans1.png"
          alt="Nordiska Solutions Logo"
        />
      </Link>
      <Navbar />
    </div>
  </header>

  )
}

export default Header