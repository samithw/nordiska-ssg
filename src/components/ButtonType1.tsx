import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {children : React.ReactNode, toPath : string, styleClass? : string}

const ButtonType1 = (props: Props) => {
  return (
    
    <NavLink to={props.toPath} className={props.styleClass}> 
      {props.children} 
    </NavLink>

    
  )
}

export default ButtonType1