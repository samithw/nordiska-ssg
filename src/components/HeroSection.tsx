import React, { JSXElementConstructor } from 'react'

type Props = {bgCSS : React.CSSProperties, 
  children : {
    pageTag : React.ReactNode,
    bigTextHeading : React.ReactNode,
    smallText? : React.ReactNode
  }
}

const HeroSection = (props: Props) => {

  return (
    <>
      <div className="content-wrapper" style= {props.bgCSS} >
        <div className="container min-h-[90vh] md:h-screen flex items-end pb-[5vw]">
          <div className=' md:static left-0 right-0 md:left-auto md:right-auto items-end font-zen break-words lg:w-fit lg:max-w-[70%] drop-shadow-md border-b-4 border-r-4 border-cyan-300/50 md:border-none rounded-[3rem] p-7 md:p-0 bg-gradient-to-br from-slate-300/20 to-transparent md:bg-none'>
          
          <h1 className=" text-sm md:text-xl text-white bg-[#00A3FF] w-fit px-4 py-1 rounded-3xl mb-2"> {props.children.pageTag} </h1>
          <h2 className=" text-2xl md:text-3xl lg:text-4xl text-white"> {props.children.bigTextHeading} </h2>
          <h3 className=" text-sm md:text-lg text-white "> {props.children.smallText} </h3>

           </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection