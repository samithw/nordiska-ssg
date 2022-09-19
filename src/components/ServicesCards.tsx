import React, {useRef, useEffect} from 'react'
import ButtonType1 from './ButtonType1'
import CarouselCard from './CarouselCard'
import { Link } from './../../renderer/Link'

type Props = {}



const ServicesCards = (props: Props) => {

  const nextCard = useRef<HTMLButtonElement>(null);
  const previousCard = useRef<HTMLButtonElement>(null);
  const scrollWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {

    let cardWidth : number

      nextCard.current?.addEventListener("click" , (el) => {
        cardWidth = document.querySelectorAll<HTMLElement>('.icon-wrapper')[0].scrollWidth
        scrollWrapper.current?.scrollBy({left : cardWidth , behavior : 'smooth'})
      })

      previousCard.current?.addEventListener("click" , (el) => {
        cardWidth = document.querySelectorAll<HTMLElement>('.icon-wrapper')[0].scrollWidth
        scrollWrapper.current?.scrollBy({left : -cardWidth , behavior : 'smooth'})
      })

      scrollWrapper.current?.addEventListener("touchmove" , (event) => {
        //cardWidth = document.querySelectorAll<HTMLElement>('.icon-wrapper')[0].scrollWidth
        //event.preventDefault()
        scrollWrapper.current?.scrollBy({left : cardWidth , behavior : 'smooth'})
        //console.log(event)
      }, false)

    

    //}
  })

  return (
    
    <div className = "content-wrapper" style = {{ backgroundImage: 'url("/images/banner__services__1.jpg")'}}>
        <div className="container relative flex">
          
          <h1 className="absolute top-10 text-4xl lg:text-5xl font-zen text-white">our services</h1>
          
          {/* <button ref={previousCard} className=' text-white hidden md:block mr-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className=" h-20 w-10" fill="none" viewBox="6 0 10 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button> */}

          <div ref={scrollWrapper} className="flex flex-row md:flex-wrap gap-3 mx-auto py-10 pt-20 w-auto overflow-x-scroll md:overflow-auto snap-mandatory snap-x">
            
            <CarouselCard>
                {{
                  bgColorStyle : {
                    backgroundImage : 'url("/images/banner__business__matchmaking.jpg")'
                  },
                  cardImageURL : "/images/icon__type2__discussion.png",
                  cardTitle : "business matchmaking",

                  cardSummary : "",

                  cardLink : <Link href='/services/business-matchmaking' className='btn-w'>see more</Link>
                }}

            </CarouselCard>

            <CarouselCard>
                {{
                  bgColorStyle : {
                    backgroundImage : 'url("/images/banner__direct__market__2.jpg")'
                  },
                  cardImageURL : "/images/icon__type2__discussion.png",
                  cardTitle : "direct market entrance",
                  cardSummary : "",
                  cardLink : <Link href='/services/direct-market-entrance' className='btn-w'>see more</Link>
                }}

            </CarouselCard>

            <CarouselCard>
                {{
                  bgColorStyle : {
                    backgroundImage : 'url("/images/banner__direct__touch__sales.jpg")'
                  },
                  cardImageURL : "/images/icon__type2__discussion.png",
                  cardTitle : "direct touch sales activities",
                  cardSummary : "",
                  cardLink : <Link href='/services/direct-touch-sales-activities' className='btn-w'>see more</Link>
                }}

            </CarouselCard>

            <CarouselCard>
                {{
                  bgColorStyle : {
                    backgroundImage : 'url("/images/banner__inbound__outbound.jpg")'
                  },
                  cardImageURL : "/images/icon__type2__discussion.png",
                  cardTitle : "inbound and outbound marketing",
                  cardSummary : "",
                  cardLink : <Link href='/services/inbound-outbound-marketing' className='btn-w'>see more</Link>
                }}

            </CarouselCard>

            <CarouselCard>
                {{
                  bgColorStyle : {
                    backgroundImage : 'url("/images/banner__channel__development.jpg")'
                  },
                  cardImageURL : "/images/icon__type2__discussion.png",
                  cardTitle : "channel development and channel management",
                  cardSummary : "",
                  cardLink : <Link href='/services/channel-development-channel-management' className='btn-w'>see more</Link>
                }}

            </CarouselCard>

            <CarouselCard>
                {{
                  bgColorStyle : {
                    backgroundImage : 'url("/images/banner__sales__outsourcing.jpg")'
                  },
                  cardImageURL : "/images/icon__type2__discussion.png",
                  cardTitle : "sales outsourcing",
                  cardSummary : "",
                  cardLink : <Link href='/services/sales-outsourcing' className='btn-w'>see more</Link>
                }}

            </CarouselCard>


            <CarouselCard>
                {{
                  bgColorStyle : {
                    backgroundImage : 'url("/images/banner__indian__market__2.jpg")'
                  },
                  cardImageURL : "/images/icon__type2__discussion.png",
                  cardTitle : "gateway to indian market",
                  cardSummary : "",
                  cardLink : <Link href='/services/gateway-to-indian-market' className='btn-w'>see more</Link>
                }}

            </CarouselCard>


            <CarouselCard>
                {{
                  bgColorStyle : {
                    backgroundImage : 'url("/images/banner__building__modeling.jpg")'
                  },
                  cardImageURL : "/images/icon__type2__discussion.png",
                  cardTitle : "building information modeling",
                  cardSummary : "",
                  cardLink : <Link href='/services/building-information-modeling' className='btn-w'>see more</Link>
                }}

            </CarouselCard>

          </div>

          {/* <button ref={nextCard} className=' text-white hidden md:block ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-10" fill="none" viewBox="7 0 10 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>      
          </button> */}

        </div>
      </div>
  )
}

export default ServicesCards