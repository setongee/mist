import React from 'react'
import Container from '../../components/container/Container'
import Button from '../../components/button/Button'
import './home.scss'
import stat from '../../assets/landing/mist.svg'
import tech from '../../assets/landing/tech__mist.png'
import icon from '../../assets/landing/iconUse.svg'
import fin5 from '../../assets/fin/5.png'
import Newsroom from '../../components/newsroom/newsroom'
import Footer from '../../components/footer/footerArea'
import { Check, MouseScrollWheel } from 'iconoir-react'
import Rrs from '../../components/rrs/Rrs'

import aot1 from '../../assets/aot/1.jpeg'
import aot2 from '../../assets/aot//2.jpg'
import aot3 from '../../assets/aot/3.jpg'

import ilera from '../../assets/moh/ilera__eko.png'
import emergency from '../../assets/moh/emergency_medical_services_lasambus_lasasem.png'
import cin from '../../assets/moh/registerCIN.png'
import RrsNews from '../../components/rrs/rrsNews'

import alake from '../../assets/landing/council_Olatubosun_Alake (1).png'

// animation library
import { motion } from "motion/react"

export default function Home() {
  return (
    <div className="home">

        {/* <RrsNews/> */}

        <Container>

            <div className="landing__area">

                <motion.div className="text__part" >

                    <h1> Creating a Progressive, Tech-Driven Lagos <span>Through Science and Innovation.</span> </h1>
                    <p>Championing advanced technology and innovative solutions to drive sustainable development, enhance public services, and build a smarter Lagos for all.</p>
                    
                    <div className="scroll">  Scroll down to explore <div className="icon"><MouseScrollWheel/></div></div>

                </motion.div>

                <div className="logosneek">
                    <img src={icon} alt="" />
                </div>

                {/* <div className="stoPic">
                    <img src={stat} alt="" />
                </div> */}

                <div className="stoPic">
                    <img src={tech} alt="" />
                </div>

            </div>

        </Container>

        {/* commissioners corner */}

        <div className="commissionerCorner">

            <Container>

                <div className="corner flex">

                    <motion.div className="photoChance" initial = { { x : "-200px" } } whileInView={{x : 0}} transition={{ duration: 1, type: "tween" }} >

                        <div className="boxChance"></div>

                        <div className="photoCom">
                            <img src={alake} alt="" />
                        </div>

                    </motion.div>

                    <motion.div className="speech" initial = { { x : "200px" } } whileInView={{x : 0}} transition={{ duration: 1, type: "tween" }}>

                        <div className="who">About us - <span>Who we are</span> </div>

                        <div className="speech__title"> Empowering Innovation Through Tailored Digital Solutions </div>
                        <div className="speech__desc"> We specialize in delivering tailored digital solutions, leveraging cutting-edge technology to drive innovation, streamline operations, and empower businesses to achieve growth. </div>

                        <div className="buttonGrp flex">
                            <Button content  = 'About Us' type = 'button__danger' arrow = {true} arrow__type='up' to = '/about#introduction' />
                            <Button content  = 'Vision & Mission' type = 'button__secondary' to = '/about#mission' />
                        </div>

                    </motion.div>

                </div>

            </Container>

        </div>

        <div className="service">

            <Container>

                <div className="topic__hand"> Empowering Lagos Through Strategic MIST Programmes and Innovation Initiatives </div>

                <div className="cards flex gap__30">

                    <motion.div className="card__blaze" initial = { { y : "200px", opacity : 0 } } whileInView={{y : 0, opacity : 1}} transition={{ duration: 1, type: "easseInOut" }} >

                        <div className="text__container"> 
                            
                            <div className='card__title'> Lagos State Science Research and Innovation Council (LASRIC) </div> 
                            
                            <p> LASRIC, the Lagos State Research and Innovation Council, funds research, innovation, and startups, fostering technological advancement, entrepreneurship, and economic growth in Lagos through strategic support and grants. </p>

                            <div className="checklist">

                                <div className="itemInfo">
                                    <Check/> Access to Funding Oppurtunities
                                </div>

                                <div className="itemInfo">
                                    <Check/> Investment Potential Evaluation
                                </div>

                                <div className="itemInfo">
                                    <Check/> Business Development and Strategy
                                </div>

                                <div className="itemInfo">
                                    <Check/> Network of Contacts and Connections
                                </div>

                            </div>

                            <Button content  = 'Learn More' type = 'button__danger' arrow = {true} arrow__type='up' to = 'https://lasric.lagosstate.gov.ng/' />

                        </div>

                    </motion.div> 

                    <motion.div className="card__blaze" initial = { { y : "200px", opacity : 0 } } whileInView={{y : 0, opacity : 1}} transition={{ duration: 1, delay : 0.2, type: "easseInOut" }}>

                        <div className="text__container"> 
                            
                            <div className='card__title'> Art Of Technology, {<br></br>} Lagos (AOT) </div> 
                            
                            <p> The Art of Technology Lagos is an annual conference uniting government, industry leaders, and innovators to explore technology's role in driving economic growth, governance, and innovation.</p>

                            <div className="checklist">

                                <div className="itemInfo">
                                    <Check/> Fosters Collaboration
                                </div>

                                <div className="itemInfo">
                                    <Check/> Showcases Innovation
                                </div>

                                <div className="itemInfo">
                                    <Check/> Encourages Digital Transformation
                                </div>

                                <div className="itemInfo">
                                    <Check/> Promotes Capacity Building
                                </div>

                            </div>

                            <Button content  = 'Learn More' type = 'button__danger' arrow = {true} arrow__type='up' to = 'https://aotlagos.com/' />

                        </div>

                    </motion.div> 

                    <motion.div className="card__blaze" initial = { { y : "200px", opacity : 0 } } whileInView={{y : 0, opacity : 1}} transition={{ duration: 1, delay : 0.4, type: "easseInOut" }}>

                        <div className="text__container"> 
                            
                            <div className='card__title'> Lagos State Residents Registration Agency : LASRRA </div> 
                            
                            <p> Lagos State Residents Registration Agency (LASRRA) manages resident data for planning, service delivery, and governance, issuing unique ID numbers to enhance public resource allocation and security. </p>

                            <div className="checklist">

                                <div className="itemInfo">
                                    <Check/> Valid form of Identification
                                </div>

                                <div className="itemInfo">
                                    <Check/> Public Transportation Benefits
                                </div>

                                <div className="itemInfo">
                                    <Check/> Healthcare and Welfare Benefits
                                </div>

                                <div className="itemInfo">
                                    <Check/> Access to Social Programs
                                </div>

                            </div>

                            <Button content  = 'Learn More' type = 'button__danger' arrow = {true} arrow__type='up' to = 'https://www.lagosresidents.gov.ng/' />

                        </div>

                    </motion.div>                         
                    
                </div>           


            </Container>

        </div>

        {/* <Container>

            <div className="programmes">

                <div className="programme__parent flex gap__30">

                    <div className="programme__item">

                        <a href="https://ileraeko.com/"> <img src={ilera} alt="" /> </a>

                    </div>

                    <div className="programme__item">

                        <a href="tel:123"> <img src={emergency} alt="" /> </a>

                    </div>

                    <div className="programme__item">

                        <a href="https://hefamaa.lagosstate.gov.ng/registration/"> <img src={cin} alt="" /> </a>

                    </div>

                </div>

            </div>

        </Container> */}

        <div className="news-flat">

            <Container>

                <Newsroom/>

            </Container>

        </div>


        <Footer/>

    </div>
  )
}
