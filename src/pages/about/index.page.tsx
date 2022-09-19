import React from 'react'
import HeroSection from '../../components/HeroSection'
import PageQuote from '../../components/PageQuote'

export { Page }

export const documentProps = {
  // This title and description will override the defaults
  title: 'About Nordiska Solutions',
  description: 'we strive to implement long-term relationships with our clients, based on extensive industry knowhow, quality services, reliable technologies, and thorough understanding of all parties involved in the business'
}

function Page() {
  return (
    <>
      <HeroSection bgCSS={{ backgroundImage : 'url("/images/banner__about__us.jpg")' }}>
        
        {{
          pageTag : <>the nordiska story</>,
          bigTextHeading : <>we bridge two continents to bring you <span className=' text-nsgreen'>world-class</span> service</>,
          smallText : <>to grow your business with <span className=' text-nsgreen'>high-end technologies and solutions</span></>
        }}
      
      </HeroSection>
      <PageQuote>
        <span>we strive to implement long-term relationships with our clients, based on extensive industry knowhow, quality services, reliable technologies, and thorough understanding of all parties involved in the business.</span>
      </PageQuote>

      <div className="content-wrapper" style={{backgroundImage: 'linear-gradient(45deg, #001140 30%, #010d31 70%)'}}>
      <div className="container flex flex-col gap-20 md:flex-row">
        <div className="text-white md:basis-1/2 font-zenMaru text-xl md:text-2xl">
          <h3 className="font-zen text-nsgreen text-4xl">history</h3>
          <p className="my-10">nordiska solutions is a finnish-malaysian company which has developed a cluster business concept with some leading environmental companies in europe and asia specialised in water, wastewater and solid waste management technologies and solutions.</p>

          <p>this cluster business platform provides sophisticated and cost-effective solutions that are in the best interest of our clients, their customers, and the environment. the company’s founder has over 22 years experience in the cleantech field and extensive knowledge in international business.</p>

        </div>
        <div className="text-white md:basis-1/2 font-zenMaru text-xl md:text-2xl">
          <h3 className="font-zen text-nsgreen text-4xl">expertise</h3>
          <p className="my-10">the domain expertise and experience gathered over the past two decades gives us an edge over the competition, and helps us provide high-end technologies and solutions to various domestic and industrial applications.</p>

          <p className="my-10">we constantly continue developing our service platform, touch points together with our customers and partners in order to guarantee the very highest level of customer satisfaction and sustainability.</p>

          <p className="my-10">we passionately believe that people and teams build projects; our approach results in an efficient and high-quality service, which is both cost-effective and responsive, enabling our customers to enjoy risk-free services.</p>
          
        </div>
      </div>
    </div>
    </>
  )
}
