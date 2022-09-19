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
    <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url("/images/banner__inbound__outbound.jpg")' }}>
      {{
        pageTag : <>services</>,
        bigTextHeading : <>inbound and outbound <br />marketing</>
      }}
    </HeroSection>

    
    <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>

        <ContentLayout2Col uniqueId='business-matchmaking'>
          {{
            contentBody : (<>
            <p>with inbound marketing, we help you generate qualified leads and increase awareness of your product(s) and service(s) to increase sales.</p>
            
            <p className='mt-10'>we create original content – such as blog posts – to attract the right people, and refine them to influence purchase decision.</p>

            <p className='mt-10'>finding the right people is not easy. through active dialogue marketing, our outbound marketing service helps you in all phases of the customer relationship. we conduct market evaluations and generate leads, increase awareness of your portfolio among new and existing customers, and organize customer meetings for your key accounts. we arrange the dialogue for you, and constantly follow-up on every touch point to ensure an all-round customer experience on your behalf. we focus on the requirements of your target market segment and interact with each responsible party. this way, we help you stay competitive through better customer understanding.</p>

            </>),
            contentTitle : "we guide you to remain competitive through better customer understanding",
            contentImageURL : "/images/icon__business__match.png",
          }}
        </ContentLayout2Col>

        <ContentSeparater bgCSS={{ backgroundColor : "#3F5157" }}>
              {{
                imageURLs : [
                  "/images/icon__inbound__1.png",
                  "/images/icon__inbound__2.png",
                  "/images/icon__inbound__3.png",
                  ]
              }}
            </ContentSeparater>

      </CommonContainer>

  
  
  </>)
}
