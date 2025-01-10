import React from 'react'
import Container from '../../components/container/Container'
import './connect.scss'
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MailOpen, Phone, SmartphoneDevice, X, Youtube } from 'iconoir-react'
import YouTube from 'react-youtube'

export default function Connect() {
  return (
    <div className="connect">

        <Container>

            <div className="contact">

                <div className="side1">

                    <div className="head">
                        
                        <h1> <span>Reach Out to Us</span> for Support, Inquiries, or Feedback Today! </h1>
                        <div className='span' >Send us an email today📬 or call in</div>

                    </div>

                    <div className="connect__info">

                        <p> <Mail color='green'/> mist@lagosstate.gov.ng </p>
                        <p> <Phone color='green'/> 234-1-4969061 </p>

                        <div>
                            <a target = '_blank' href="https://www.google.com/maps/place/Lagos+State+Government+Secretariat/@6.6131397,3.3584649,17z/data=!4m10!1m2!2m1!1sBlock+4,+The+Lagos+State+Government+Secretariat+Complex,+Alausa,+Ikeja,+Lagos.!3m6!1s0x103b93b5de2d07a9:0xc0382f250b5ca65!8m2!3d6.6131397!4d3.3610398!15sCk5CbG9jayA0LCBUaGUgTGFnb3MgU3RhdGUgR292ZXJubWVudCBTZWNyZXRhcmlhdCBDb21wbGV4LCBBbGF1c2EsIElrZWphLCBMYWdvcy6SARdzdGF0ZV9nb3Zlcm5tZW50X29mZmljZeABAA!16s%2Fg%2F1hhk6bhr7?entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D"> Block 4, The Lagos State Government Secretariat Complex, Alausa, Ikeja, Lagos. </a>
                        </div>

                    </div>

                </div>

            </div>

            <div className="socials__time flex">
                <p>Connect with us on our socials, <span className="e">Stay up-to-date!</span> </p>
                <div className="account flex gap__30">
                    <a href="https://www.instagram.com/lasgmist/" target='_Blank' ><Instagram/></a>
                    <a href="https://x.com/lasgmist" target='_Blank'><X/></a>
                    <a href="https://web.facebook.com/lasgmist/?_rdc=1&_rdr#" target='_Blank' ><Facebook/></a>
                    <a href="https://www.linkedin.com/company/lasgmist/posts/?feedView=all" target='_Blank' ><Linkedin/></a>
                </div>
            </div>

        </Container>

    </div>
  )
}
