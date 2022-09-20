import React from 'react'
import HeroSection from '../../components/HeroSection'
import PageQuote from '../../components/PageQuote'
import ServicesCards from '../../components/ServicesCards'

export { Page }

export const documentProps = {
  // This title and description will override the defaults
  title: 'Our Services - Nordiska Solutions',
  description: 'We strive to implement long-term relationships with our clients, based on extensive industry knowhow, quality services, reliable technologies, and thorough understanding of all parties involved in the business'
}

function Page() {
  return (<>
    <HeroSection bgCSS={{backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)) , url("/images/banner__services__2.jpg")'}}>
        {{
          pageTag : <>a wide offering </>,
          bigTextHeading : <>we work with <br /> <span className='text-nsgreen'>our partners</span> constantly</>,
          smallText : <>providing customizable solutions in cleantech for profitable growth</>
        }}
    </HeroSection>

    <PageQuote>
        <p>nordiska solutions helps innovative engineering companies, epc contractors, end-users, consulting companies extend their reach into europe, and the asia-pacific region by providing expert sales, business development and inbound/outbound marketing services. We constantly work with our partners by providing scalable and customizable solutions that support their profitable growth.</p>
    </PageQuote>

    <ServicesCards />

  
  
  </>)
}
