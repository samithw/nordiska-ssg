import React from 'react'
import HeroSection from '../../components/HeroSection'
import ContentSection from '../../components/ContentSection'
import ServicesCards from '../../components/ServicesCards'
import { Link } from '../../../renderer/Link'

export { Page }

export const documentProps = {
  title: 'Nordiska Solutions - We bridge two continents to bring you world-class service',
  description: 'We are committed to providing optimal nordic cleantech to address today’s challenges across the nation and around the world, and to preparing for tomorrow’s environmental trends'
}

function Page() {
  return (
    <>
      <HeroSection bgCSS={{ backgroundImage : 'url("images/banner__nordiskasolutions__home.jpg")'}}>

      {{
        pageTag : "@nordiskasolutions",
        bigTextHeading : <>we are committed to providing optimal nordic <span className=" text-nsgreen">cleantech</span></>,
        smallText : <>to address today’s challenges across the nation and around the world, and to preparing for <span className="text-nsgreen">tomorrow’s environmental trends.</span></>
      }}

      </HeroSection>

      <ServicesCards />

      <ContentSection>
      {{
          contentBgCSS : {
            backgroundImage :'url("/images/banner__about__2.jpg")'
          },
          contentTitle : "who we are",
          contentBody : (
          <p>nordiska solutions is a finnish-malaysian company which has developed a cluster business concept with some leading environmental companies in europe and asia specialised in water, wastewater and solid waste management technologies and solutions.</p>
          ),
          contentImageURL : "/images/icon__who.png",
          contentLink : <Link href='/about' className='btn-type1'>see more</Link>
      }}
      </ContentSection>
    </>
  )
}
