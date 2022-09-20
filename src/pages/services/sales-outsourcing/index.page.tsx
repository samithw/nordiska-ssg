import React from 'react'
import HeroSection from '../../../components/HeroSection'
import CommonContainer from '../../../components/CommonContainer'
import ContentLayout2Col from '../../../components/ContentLayout2Col'
import ContentSeparater from '../../../components/ContentSeparater'

export { Page }

export const documentProps = {
  // This title and description will override the defaults
  title: 'Sales Outsourcing - Nordiska Solutions',
  description: 'We also offer business development outsourcing services based on your business criteria. our sales experts have extensive experience and market knowledge in the asia-pacific and middle east markets'
}

function Page() {
  return (<>
    <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url("/images/banner__sales__outsourcing.jpg")' }}>
      {{
        pageTag : <>services</>,
        bigTextHeading : <>sales <br />outsourcing</>
      }}
    </HeroSection>

    
    <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>

        <ContentLayout2Col uniqueId='business-matchmaking'>
          {{
            contentBody : (<>
            <p>looking to expand your sales team, or let someone else handle sales for you? sales outsourcing is an efficient and effective alternative.</p>

            <p className='mt-10'>hiring dedicated staff to build and manage your business in the asia-pacific region is costly, and the return on investment is difficult to predict. training new staff and obtaining the appropriate contacts and market knowledge can be a time – and resource – consuming process. we offer dedicated sales resources who could undertake the most time-consuming task in order to grow your brand identity and revenue. we also offer business development outsourcing services based on your business criteria.</p>

            </>),
            contentTitle : "sales outsourcing – an efficient and effective alternative",
            contentImageURL : "/images/icon__business__match.png",
          }}
        </ContentLayout2Col>

        <ContentSeparater bgCSS={{ backgroundColor : "#3F5157" }}>
          {{
            imageURLs : [
              "/images/icon__sales__outsourcing__1.png",
              "/images/icon__sales__outsourcing__2.png",
              "/images/icon__sales__outsourcing__3.png",
              ]
          }}
        </ContentSeparater>

        <ContentLayout2Col uniqueId='business-matchmaking'>
          {{
            contentBody : (<>
            
            <p>our sales experts have extensive experience and market knowledge in the asia-pacific and middle east markets. we know the corporate culture and background of the various prospects, and have a considerable network which covers all areas – from consultant to end-users. with this working concept, you are able to “smell” the market in the specified region and minimize your risk exposure.</p>

            <p className='mt-10'>as of now, we have helped several european and asian companies to materialize considerable business in the asia-pacific region. we highly recommend you start your sales activities with us now. our services are at your disposal.</p>

            </>),
            contentTitle : "extensive experience and market knowledge",
            contentImageURL : "/images/icon__business__match.png",
          }}
        </ContentLayout2Col>

      </CommonContainer>

  </>)
}
