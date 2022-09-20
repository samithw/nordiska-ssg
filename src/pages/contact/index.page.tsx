import React from 'react'
import HeroSection from '../../components/HeroSection'
import CommonContainer from '../../components/CommonContainer'
import ContentLayout2Col from '../../components/ContentLayout2Col'
import ContentSeparater from '../../components/ContentSeparater'
import ContactCard from '../../components/ContactCard'

export { Page }

export const documentProps = {
  // This title and description will override the defaults
  title: 'Get in touch - Nordiska Solutions',
  description: 'You are on track to global expansion, our well-established presence and partnerships are there for you'
}

function Page() {
  return (<>
  <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)) , url("/images/banner__contact.jpg")' }}>
          {{
            pageTag : <>get in touch</>,
            bigTextHeading : <>you are <span className='text-nsgreen'>on track</span> to global expansion</>,
            smallText : <>our well-established presence and partnerships are there for you</>
          }}
        </HeroSection>

        <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>
        
        <ContentLayout2Col>
              {{
                contentBody : (<>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
              <ContactCard>
                {{
                  contactHeader : "malaysia",
                  contactAddress : <>
                      <p>
                        <b>Nordiska Solutions sdn. bhd.</b> <br />
                        R1-15-10, Setiawalk, <br />
                        Perisaran Wawasan, <br />
                        47160 Puchong, Selangor, <br />
                        Malaysia
                      </p>
                  </>,
                  contactNumber : "+60194490345",
                  contactNumber2 : "+60192252875",
                  contactEmail : "info@nordiskasolutions.com"
                }}
              </ContactCard>

              <ContactCard>
                {{
                  contactHeader : "finland",
                  contactNumber : "+358414400345",
                  contactEmail : "info@nordiskasolutions.com"
                }}
              </ContactCard>
          </div>

                </>),
                contentTitle : "contact us",
                contentImageURL : "/images/icon__business__match.png",
              }}
            </ContentLayout2Col>

          
          
          <ContentSeparater bgCSS = {{ backgroundColor : "#3F5157" }}>
              {{
                imageURLs : [
                  "/images/icon__contact__1.png",
                  "/images/icon__contact__2.png",
                  "/images/icon__contact__3.png",
                  ]
              }}
            </ContentSeparater>

          <h1 className=" text-3xl md:text-4xl font-zen text-white py-10">
              <span className="">our international partners</span>
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

          <ContactCard>
                {{
                  contactHeader : "france",
                  contactAddress : <>
                      <p>
                        <b>Hydrodyn S.A.R.L</b> <br />
                        2 Av des Prés - BL104,<br />
                        78180 Montigny le Bretonneux,<br />
                        France
                      </p>
                  </>
                  
                }}
              </ContactCard>

              <ContactCard>
                {{
                  contactHeader : "germany",
                  contactAddress : <>
                      <p>
                        <b>Mr. Fritz Kropp</b> <br />
                        PV Consulting, <br />
                        D-79271 St. Peter/Black forest, <br />
                        Germany
                      </p>
                  </>
                  
                }}
              </ContactCard>

            <ContactCard>
                {{
                  contactHeader : "india",
                  contactAddress : <>
                      <p>
                        <b>Mr. Nimish Shanghvi</b><br />
                        A/302, Nishant,<br />
                        Malviya  Road,<br />
                        Vile – Parle (East),<br />
                        Mumbai, Maharashtra,<br />
                        India
                      </p>
                  </>
                  
                }}
              </ContactCard>

              <ContactCard>
                {{
                  contactHeader : "the netherlands",
                  contactAddress : <>
                      <p>
                        <b>Omnia Water Treatment BV</b><br />
                        Witte Paal 35,<br />
                        1742 NL Schagen,<br />
                        Netherlands
                      </p>
                  </>
                  
                }}
              </ContactCard>

              

              

              <ContactCard>
                {{
                  contactHeader : "vietnam",
                  contactAddress : <>
                      <p>
                        <b>Nguyen Thi Phuong Thanh</b><br />
                        No. 30, 63/212/8 Le Duc Tho, <br />My Dinh 2 ward, <br />Nam Tu Liem district, <br />Hanoi <br />
                        Vietnam
                      </p>
                  </>
                  
                }}
              </ContactCard>

          </div>

        </CommonContainer>
  </>)
}
