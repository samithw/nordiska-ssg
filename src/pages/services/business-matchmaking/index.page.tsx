import React from 'react'
import HeroSection from '../../../components/HeroSection'
import CommonContainer from '../../../components/CommonContainer'
import ContentLayout2Col from '../../../components/ContentLayout2Col'
import ContentSeparater from '../../../components/ContentSeparater'

export { Page }

export const documentProps = {
  // This title and description will override the defaults
  title: 'About Nordiska Solutions',
  description: 'we strive to implement long-term relationships with our clients, based on extensive industry knowhow, quality services, reliable technologies, and thorough understanding of all parties involved in the business'
}

function Page() {
  return (<>
    <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)) , url("/images/banner__business__matchmaking.jpg")' }}>
          {{
          pageTag : <>services</>,
          bigTextHeading : <>business <br />matchmaking</>
        }}
      </HeroSection>

      
      <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>

          <ContentLayout2Col uniqueId='business-matchmaking'>
            {{
              contentBody : (<>
                <p>are you looking for a sales partner, a distributor for your product(s) or service(s) who can open the door to the asia-pacific region? are you looking for a high-end technology and solutions provider/manufacturer in the cleantech sector from the nordic and central european region? would you like to outsource your production segments in the asia-pacific region to bring in a competitive advantage to your product(s) and service(s)?</p>

                <p className='mt-10'>our partner search program helps international companies find an agent, representative, distributor or potential outsourcing company in the asia-pacific region, and  also helps asia-pacific companies find potential manufacturing companies and technology providers in the nordic/central european region.</p>
                

                {/* 

                <p>We also coordinate and optimize the B2B meetings according to the participants profiles while guaranteeing that they will only come meet with qualified profiles.</p> */}

              </>),
              contentTitle : "a competitive advantage for your product(s) and service(s)",
              contentImageURL : "/images/icon__business__match.png",
            }}
          </ContentLayout2Col>

          <ContentSeparater bgCSS={{ backgroundColor : "#3F5157" }}>
              {{
                imageURLs : [
                  "/images/icon__business__match__3.png",
                  "/images/icon__business__match__1.png",
                  "/images/icon__business__match__2.png",
                  ]
              }}
            </ContentSeparater>

          <ContentLayout2Col uniqueId='business-matchmaking'>
            {{
              contentBody : (<>
   
                <p>we find potential business partners based on your criteria. we offer tailor-made solutions according to your industry, technology, experience, products or services, relationship with or without third party. our partner search program includes a basic market overview and a comprehensive business profile on companies interested in a mutual partnership. we also provide descriptions of companies that are not interested in entering such a relationship and their reasons for not doing so.</p>
                
                <p className='mt-10'>we coordinate and optimize b2b meetings according to participants’ profiles, while guaranteeing that only qualifying profiles meet.</p>

              </>),
              contentTitle : "relationship with or without third party",
              contentImageURL : "/images/icon__business__match.png",
            }}
          </ContentLayout2Col>

        </CommonContainer>

  
  
  </>)
}
