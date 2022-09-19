import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
    children : {
        cardTitle : string,
        cardSummary : string,
        cardLink? : React.ReactNode,
        cardImageURL : string,
        bgColorStyle : React.CSSProperties
    }
}

const CarouselCard = (props: Props) => {
  return (
    <div className="icon-wrapper">
      <div className=' w-full rounded-t-3xl bg-no-repeat bg-center bg-cover h-48' style = {props.children.bgColorStyle}>
        {/* <img className=" w-1/4" src={props.children.cardImageURL} /> */}
        
      </div>
      <h3 className="w-full text-left text-xl font-zen text-white p-4 pt-4"> {props.children.cardTitle} </h3>
        {/* <p className='text-white font-zenMaru p-6'> {props.children.cardSummary} </p> */}
        
        <div className=' mt-auto p-4'>{props.children.cardLink}</div>
    </div>
  )
}

export default CarouselCard