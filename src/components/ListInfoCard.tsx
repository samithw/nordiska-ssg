import React from 'react'

type Props = {
    children : {
        itemIcon : string,
        itemDescription : string
    }
}

const ListInfoCard = (props: Props) => {
  return (
    <div className='w-full flex border-2 border-blue-900 rounded-2xl p-4 bg-slate-800 gap-4 items-center'>
        <div className=' w-16 shrink-0'>
            <img className='w-20 shrink-0' src= {props.children.itemIcon} />
        </div>

        <h1 className='md:text-2xl'>{props.children.itemDescription}</h1>

    </div>
  )
}

export default ListInfoCard