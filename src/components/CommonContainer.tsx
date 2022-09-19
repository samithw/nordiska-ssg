import React from 'react'

type Props = { 
    children : React.ReactNode,
    contentBgCSS? : React.CSSProperties 
}

const CommonContainer = (props: Props) => {
  return (
    <div className="content-wrapper" style = { props.contentBgCSS } >
        <div className="container md:min-h-screen text-white font-zenMaru flex flex-col justify-center">

            {props.children}

        </div>
    </div>
  )
}

export default CommonContainer