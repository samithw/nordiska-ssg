import React from 'react'
import ContactDetail from './ContactDetail'

type Props = {
    children : {
        contactHeader : string,
        contactAddress? : React.ReactNode,
        contactNumber? : string,
        contactNumber2? : string,
        contactEmail? : string
    }
}

const ContactCard = (props: Props) => {

  const contactEmail : string | undefined = props.children.contactEmail
  const mailToLink : string = contactEmail ? "mailto:" + contactEmail : "" 

  return (<>
    <div className='text-xl font-zenMaru'>
        <div className=' font-zen text-nsgreen text-2xl'> {props.children.contactHeader} </div>
        {
          props.children.contactAddress && (
          <ContactDetail>
            {{
                contactInfo : <div className='p-2 capitalize'>{props.children.contactAddress}</div>
            }}
          </ContactDetail> 
          )
        }
        <div>
            
            
          {
            props.children.contactNumber && (
              <ContactDetail>
                {{
                    iconType : 'phone',
                    contactInfo : <span>{props.children.contactNumber}</span>
                }}
              </ContactDetail>

            )
          }

{
            props.children.contactNumber2 && (
              <ContactDetail>
                {{
                    iconType : 'phone',
                    contactInfo : <span>{props.children.contactNumber2}</span>
                }}
              </ContactDetail>

            )
          }
          
          {
            props.children.contactEmail && (
              <ContactDetail>
                {{
                    iconType : 'email',
                    contactInfo : <a className=' underline' href = {mailToLink}> {props.children.contactEmail} </a>
                }}
              </ContactDetail>
            )
            
          }
              

            
        </div>
    </div>
  </>)
}

export default ContactCard