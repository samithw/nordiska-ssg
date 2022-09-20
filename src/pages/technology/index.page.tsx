import React from 'react'
import HeroSection from '../../components/HeroSection'
import ContentSection from '../../components/ContentSection'
import CommonContainer from '../../components/CommonContainer'
import ContentLayout2Col from '../../components/ContentLayout2Col'
import ContentSeparater from '../../components/ContentSeparater'
import ListInfoCard from '../../components/ListInfoCard'

export { Page }

export const documentProps = {
  // This title and description will override the defaults
  title: 'Technology Solutions - Nordiska Solutions',
  description: 'We provide a range of global services to businesses in waste management with today’s top-of-the-line technology and anticipating tomorrow’s environmental trends'
}

function Page() {
  return (<>
    <HeroSection bgCSS={{ backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.1)) , url("/images/banner__technology__4.jpg")' }}>

                
    {{
    pageTag : <>nordic high-end cleantech</>,
    bigTextHeading : <>we provide a <span className='text-nsgreen'>range of global services</span> to businesses in waste management</>,
    smallText : <>with today’s <span className='text-nsgreen'>top-of-the-line technology</span> and anticipating tomorrow’s environmental trends</>
    }}

    </HeroSection>
    {/* <PageQuote>
    <span>
      
      </span>
    </PageQuote> */}

    <ContentSection>
    {{
      contentBgCSS : {
        backgroundColor : '#1E293B',
        //backgroundColor : '#081840',
        
      },
      contentTitle : "technology",
      contentBody : (
        <>
          
          <p>nordiska solutions is committed to providing primarily “nordic” high-end cleantech products and solutions for both municipal and industrial applications. we offer customised solutions in water treatment, wastewater treatment and sloid waste management to our global customers.</p>

          <p className='mt-10'>we constantly work together with our customers and technology providers in order to guarantee the highest level of customer satisfaction and sustainability. the success of our clients depends on the skills and commitment of our people, and we constantly pursue innovative technology and cost-effective solutions for our clients, as we are driven to find answers where others fail.</p>
        </> 
      ),
      contentImageURL : "/images/icon__technology__8.png"
      
    }}
    </ContentSection>

    <CommonContainer contentBgCSS={{ backgroundColor : "#282828" }}>

    <ContentLayout2Col>
      {{
        contentBody : <>
        {/* <p>We are committed to providing optimal Nordic cleantech solutions to today’s challenges across the nation and around the world and to preparing for tomorrow’s environmental trends.</p> */}
        
        <p>our superior network, as referred in all of our services, is the basis of success in building prospective partnerships. the wide range of connections enables us to offer diverse selections from each sector and business size.</p>

        <p className="mt-10">whether you are seeking partners individually or on a corporate basis, we will provide you the perfect match for your requirements.</p>

        </>,
        contentTitle : "our superior network",
        contentImageURL : ""
      }}
    </ContentLayout2Col>

    <ContentSeparater bgCSS = {{ backgroundColor : "#081840" }}>
    {{
    imageURLs : [
      "/images/icon__technology__5.png",
      "/images/icon__technology__4.png",
      "/images/icon__technology__7.png",
      ],
    }}
    </ContentSeparater>

    <ContentLayout2Col>
      {{
        contentBody : <>
        
        <p>we have tie-ups with several european and asian oem companies to provide cost-effective products and solutions to municipal water and wastewater markets. whether you need a new piece of equipment or to replace an existing system, we have the experience and engineering capabilities to deliver the most reliable and cost-effective products and solutions.</p>
        </>,
        contentTitle : "solutions with reach",
        contentImageURL : ""
      }}
    </ContentLayout2Col>

    </CommonContainer>


    <CommonContainer contentBgCSS = {{ backgroundColor : '#081840' }}>
    <h1 className=' font-zen text-4xl mb-10'>technology solutions we offer</h1>
    <ContentLayout2Col>
      {{
        contentBody : <>
        
        <div className="flex gap-4 flex-wrap">

        <ListInfoCard>
          {{
            itemIcon : "/images/icon__technology__2.png",
            itemDescription : "pre-treatment equipment such as screens (fine, coarse, bend, rotary, drum etc), compactors, slide gate etc."
          }}
        </ListInfoCard>

        <ListInfoCard>
          {{
            itemIcon : "/images/icon__technology__2.png",
            itemDescription : "DAF units, oil/water separators, lamella separators, PCI/CPI, PCS/CPS separators and clariflocculators"
          }}
        </ListInfoCard>

        <ListInfoCard>
          {{
            itemIcon : "/images/icon__technology__2.png",
            itemDescription : "clarifier mechanisms (non-metallic chain and flight sludge and scum collectors, bridge scrapers etc.)"
          }}
        </ListInfoCard>

        <ListInfoCard>
          {{
            itemIcon : "/images/icon__technology__2.png",
            itemDescription : "lamella clarifiers for SWRO"
          }}
        </ListInfoCard>

        <ListInfoCard>
          {{
            itemIcon : "/images/icon__technology__2.png",
            itemDescription : "sludge thickening and dewatering (BFP, GBT, multi-disc screw presses, screw presses etc.)"
          }}
        </ListInfoCard>

        <ListInfoCard>
          {{
            itemIcon : "/images/icon__technology__2.png",
            itemDescription : "chemical dosing systems"
          }}
        </ListInfoCard>

        <ListInfoCard>
          {{
            itemIcon : "/images/icon__technology__2.png",
            itemDescription : "sludge disposal configurations (cake hoppers, silo, conveyors etc.)"
          }}
        </ListInfoCard>

        <ListInfoCard>
          {{
            itemIcon : "/images/icon__technology__2.png",
            itemDescription : "self - cleaning filters, cumulative settling filters, customized automatic filters, drum filters , disc filters  etc."
          }}
        </ListInfoCard>
        </div>

        </>,
        contentTitle : "for municipal and industrial water and wastewater applications",
        contentImageURL : ""
      }}
    </ContentLayout2Col>

    <ContentLayout2Col>
      {{
        contentBody : <>
        
        <div className="flex flex-wrap gap-4">
          <ListInfoCard>
            {{
              itemIcon : "/images/icon__technology__2.png",
              itemDescription : "from manual sorting line to fully automated plant"
            }}
          </ListInfoCard>

          <ListInfoCard>
            {{
              itemIcon : "/images/icon__technology__2.png",
              itemDescription : "recycling and sorting to composting"
            }}
          </ListInfoCard>
        </div>

        </>,
        contentTitle : "for solids waste management",
        contentImageURL : ""
      }}
    </ContentLayout2Col>

    </CommonContainer>
  </>)
}
