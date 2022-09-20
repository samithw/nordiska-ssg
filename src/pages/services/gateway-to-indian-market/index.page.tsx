import React from 'react'
import HeroSection from '../../../components/HeroSection'
import CommonContainer from '../../../components/CommonContainer'
import ContentLayout2Col from '../../../components/ContentLayout2Col'
import ListInfoCard from '../../../components/ListInfoCard'
import ContentSeparater from '../../../components/ContentSeparater'

export { Page }

export const documentProps = {
  // This title and description will override the defaults
  title: 'Gateway to Indian Market - Nordiska Solutions',
  description: 'Nordiska Solutions has a tie-up with an indian specialist to support global cleantech technology companies to develop, nurture and manage their brand in the indian market through its customised “ACT” - advisory, consulting and technology'
}

function Page() {
  return (<>
    <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)) , url("/images/banner__indian__market__2.jpg")' }}>
      {{
        pageTag : <>services</>,
        bigTextHeading : <>gateway to <br />indian market</>
      }}
    </HeroSection>

    
    <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>

        <ContentLayout2Col uniqueId='business-matchmaking'>
          {{
            contentBody : (<>
            <p>it is well known that for any brand to grow and prosper in  a particular market, it is very essential  to learn and understand   its culture, network, and business approach pattern etc.</p>

            <p className='mt-10'>to facilitate this smoothly , it needs the support  of local expertise that understands all the stakeholders and accordingly can provide support with progressive next steps. </p>

            <p className='mt-10'>nordiska solutions has a tie-up with an indian specialist to support  global cleantech technology companies to develop, nurture and manage their brand in the indian market through its customised “ACT” - advisory, consulting and technology (implementation / customization)  services  that include the following but not limited to :</p>

            <div className='flex gap-5 flex-col my-10'>
              <ListInfoCard>
                    {{
                      itemIcon : "/images/icon__technology__2.png",
                      itemDescription : "application development and management in the indian market (entry / re-entry)"
                    }}
              </ListInfoCard>

              <ListInfoCard>
                    {{
                      itemIcon : "/images/icon__technology__2.png",
                      itemDescription : "pilots (proof of concept) development and management"
                    }}
              </ListInfoCard>

              <ListInfoCard>
                    {{
                      itemIcon : "/images/icon__technology__2.png",
                      itemDescription : "project development and management"
                    }}
              </ListInfoCard>
            </div>

            {/* <p>for additional details of act solutions and services please get in touch with us.</p> */}
            

            </>),
            contentTitle : "indian culture, network, and business approach",
            contentImageURL : "/images/icon__business__match.png",
          }}
        </ContentLayout2Col>

        {/* <ContentSeparater bgCSS={{ backgroundColor : "#783D45" }}>
          {{
            imageURLs : [
              "/images/icon__indian__market__1.png",
              "/images/icon__indian__market__2.png",
              "/images/icon__indian__market__3.png"
              ]
          }}
        </ContentSeparater> */}

      </CommonContainer>
  </>)
}
