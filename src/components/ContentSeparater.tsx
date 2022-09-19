import React from 'react'

type Props = {
  children : {
    imageURLs : string[]
  },
  bgCSS? : React.CSSProperties
}

const ContentSeparater = (props: Props) => {

  const imgElements : React.ReactNode[] = [];

  props.children.imageURLs.forEach(url => {
    imgElements.push(<div className='flex justify-center items-center w-1/3 md:w-1/6 aspect-square border-4 rounded-full p-[4%] border-white'><img className='w-[90%] mx-auto aspect-auto invert' src={url} /></div>) 
  });


  return (
    <div className="flex justify-between md:justify-evenly my-10 px-5 py-10 md:py-20  gap-x-5" style = { props.bgCSS }>
        {imgElements}
    </div>
  )
}

export default ContentSeparater