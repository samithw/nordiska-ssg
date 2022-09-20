import React from 'react'
import HeroSection from '../../../components/HeroSection'
import CommonContainer from '../../../components/CommonContainer'
import ContentLayout2Col from '../../../components/ContentLayout2Col'
import ContentSeparater from '../../../components/ContentSeparater'

export { Page }

export const documentProps = {
  // This title and description will override the defaults
  title: 'Direct Market Entrance - Nordiska Solutions',
  description: 'We manage your business in the asia-pacific region during the initial stages of your market entrance, literally creating your “own” asian office, or acting as your agent/partner in the region'
}

function Page() {
  return (<>
    <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)) , url("/images/banner__direct__market__2.jpg")' }}>
        {{
          pageTag : <>services</>,
          bigTextHeading : <>direct market <br />entrance </>
        }}
      </HeroSection>

      
      <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>

          <ContentLayout2Col uniqueId='business-matchmaking'>
            {{
              contentBody : (<>

                <p>we manage your business in the asia-pacific region during the initial stages of your market entrance, literally creating your “own” asian office, or acting as your agent/partner in the region. specific countries can be selected according to your preference. nordiska solutions will directly engage with end-users, epc contractors, and win reference customers for you. moreover, nordiska solutions can set up your representative channel and establish relationships with strategic partners, requiring only a minimal investment in resources on your part.</p>

              </>),
              contentTitle : "establish relationships with strategic partners",
              contentImageURL : "/images/icon__business__match.png",
            }}
          </ContentLayout2Col>

          <ContentSeparater bgCSS={{ backgroundColor : "#3F5157" }}>
              {{
                imageURLs : [
                  "/images/icon__direct__markets__4.png",
                  "/images/icon__direct__markets__2.png",
                  "/images/icon__direct__markets__3.png",
                  ]
              }}
            </ContentSeparater>

          <ContentLayout2Col uniqueId='business-matchmaking'>
            {{
              contentBody : (<>
   
                <p>nordiska solutions executives have extensive experience in asia-pacific, middle eastern and european businesses, and a large network of personal contacts at numerous companies in the region – particularly in the cleantech sector. the quality of these valuable contacts assures that nordiska solutions can quickly liaise with the respective parties to generate win-win business solutions for your technology, products and solutions, upon which you could build your future business relationship.</p>

                <p className='mt-10'>if you need detailed information, we would be delighted to get in touch with you.</p>

              </>),
              contentTitle : "extensive experience in asia-pacific, middle eastern and european businesses",
              contentImageURL : "/images/icon__business__match.png",
            }}
          </ContentLayout2Col>

        </CommonContainer>

  
  
  </>)
}
