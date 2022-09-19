import React from 'react'
import ButtonType1 from './ButtonType1'
import Header from './Header'

type Props = {
    children : {
        contentTitle : string,
        contentBody : React.ReactNode,
        contentImageURL : string
        
    },

    uniqueId? : string;
    
}

const ContentLayout2Col = (props : Props) => {

    return(
        <>       
            <div className="flex flex-col md:flex-row my-5 md:gap-x-[3vw]">
                <div className=' md:w-[35%] md:border-r-4 md:pr-[3vw] shrink-0 break-words'>
                    <h3 className="font-zen text-3xl mb-10 md:text-3xl md:text-right text-nsgreen lg:text-4xl">{props.children.contentTitle}</h3>
                </div>
                <div className=" md:w-[65%] text-xl md:text-2xl md:leading-10">
                    {props.children.contentBody}
                </div>
            </div>
        </>
    )
}
    


export default ContentLayout2Col