import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'
import { Link } from '../../renderer/Link'

type Props = {}


const Navbar = (props: Props) => {

  const [menuStatus, setMenuStatus] = useState(false)

  const mainNavRef = useRef<HTMLUListElement>(null)
  const isHidden = menuStatus ? "" : "hidden"

  

  const handleCLick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuStatus(!menuStatus)
  }
  
  useEffect(()=>{
    document.addEventListener("mousedown", (e) => {
      //console.log(mainNavRef.current?.contains(e.target as HTMLElement ))
      if(!mainNavRef.current?.contains(e.target as HTMLElement)){
        setMenuStatus(false);
      }
    })

    // document.querySelectorAll('.nav-item:not(.has-sub-menu) a , .sub-nav a').forEach((el)=>{
    //     el.addEventListener("click" , (e) => {
    //       setMenuStatus(false);
    //     })
    // })
  })

  
  

  return (
    <nav>
      <ul ref = { mainNavRef } id = "mainNav"
        className = { isHidden + ' fixed right-0 top-0 min-h-screen h-full w-2/3 z-10 font-zen text-lg bg-zinc-800 bg-opacity-90 pt-30 md:relative md:flex md:flex-row md:w-auto md:h-auto md:min-h-0 md:bg-transparent md:space-x-0 lg:space-x-5  md:top-0 text-white lg:text-base md:text-sm'}
      >
        <li className="nav-item">
          <Link href="/"><span>home</span></Link>
        </li>
        <li className="nav-item">
          <Link href="/about"><span>about</span></Link>
        </li>
        {/* <li className="nav-item">
          <a href="#"><span>products</span></a>
        </li> */}
        <li className="nav-item has-sub-menu">
          <Link href="/services"><span>services</span></Link>
          <ul className='md:absolute p-0 m-0 hidden border-2 border-teal-600 bg-[#282828] bg-opacity-70 rounded-b-xl md:rounded-tr-xl '>
            <li className=' sub-nav'><Link href="/services/business-matchmaking"><span>business matchmaking</span></Link></li>
            <li className=' sub-nav'><Link href="/services/direct-market-entrance"><span>direct market entrance</span></Link></li>
            <li className=' sub-nav'><Link href="/services/direct-touch-sales-activities"><span>direct touch sales activities</span></Link></li>
            <li className=' sub-nav'><Link href="/services/inbound-outbound-marketing"><span>inbound and outbound marketing</span></Link></li>
            <li className=' sub-nav'><Link href="/services/channel-development-channel-management"><span>channel development and channel management</span></Link></li>
            <li className=' sub-nav'><Link href="/services/sales-outsourcing"><span>sales outsourcing</span></Link></li>
            <li className=' sub-nav'><Link href="/services/gateway-to-indian-market"><span>gateway to indian market</span></Link></li>
            <li className=' sub-nav'><Link href="/services/building-information-modeling"><span>building information modeling</span></Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link href="/technology"><span>technology</span></Link>
        </li>
        <li className="nav-item">
          <Link href="/contact"><span>contact</span></Link>
        </li>
      </ul>
      <button onClick={handleCLick} className="md:hidden z-100" id="mobileNavBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  )
}

export default Navbar