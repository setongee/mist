import React from 'react'
import Container from '../../components/container/Container'
import './about.scss'
import ScrollSpy from "react-ui-scrollspy";
import { Cellar, City } from 'iconoir-react'
import '../../styles/card__ui.scss'
import '../../styles/gallery.scss'

// icons
import agency from '../../assets/MDA/agency.svg'
import dept from '../../assets/MDA/department.svg'
import units from '../../assets/MDA/ministry.svg'

//people
import tunbosun from '../../assets/people/council_Olatubosun_Alake (1).png'
import ibilola from '../../assets/people/ibilola.jpeg'
import adewoju from '../../assets/people/ADEWOJU OLUSOLA OLAYINKA.jpeg'
import faderera from '../../assets/people/mrs-lekan-rotimi.png'
import gbemi from '../../assets/people/mrs-Bolarinwa.png'
import tunji from '../../assets/people/tunji.jpeg'
import yinka from '../../assets/people/SORUNGBE-TIWALADE-ADEYINKA.jpg'
import idris from '../../assets/people/idris.jpeg'
import Footer from '../../components/footer/footerArea';

export default function About() {
  return (
    <div className="about">

        <div className="navigateMenu">

            <Container>

                <div className="spy__links">

                    <a href='#introduction' data-to-scrollspy-id="introduction"> Introduction </a>
                    <a href='#mission' data-to-scrollspy-id="mission"> Mission & Vision </a>
                    <a href='#agency' data-to-scrollspy-id="agency"> Agencies, Departments and Units </a>
                    <a href='#responsibility' data-to-scrollspy-id="responsibility"> Responsibilities </a>
                    <a href='#people' data-to-scrollspy-id="people"> Principal officers </a>

                </div>

            </Container>

        </div>
        
        <div className="about__contents">

            <Container>

                <ScrollSpy >

                    <section id="introduction" className='content'>

                        <div className="intro">

                        Initiate, formulate, execute, monitor and evaluate policies relating to Science & Information Communication Technology (ICT).                         

                        </div>

                        <div className="pinna">//////////////////////////////////////////////////////////////////</div>

                        <div className="brief">

                            <div className="tab">Brief Introduction</div>
                            
                            <p>The Ministry was created in February 2004 by the administration of Asiwaju Bola Ahmed Tinubu from what used to be the Office of Special Adviser on Information Technology and Special Services.</p>
                        </div>

                    </section>

                    <section id="mission">

                        <div className="bubble"> 

                            <div className="headUp">Vision Statement</div>

                            <p className='tube'>To be the best public sector financial service provider and a citadel for financial professionals. </p>

                        </div>

                        <div className="bubble"> 

                            <div className="headUp">Mission Statement</div>

                            <p>To provide world class financial services to the stakeholders through IT driven processes with seasoned professionals working in a conducive environment. </p>

                        </div>

                    </section>

                    <div id="agency">

                        <div className="titlePin">
                            Explore Agencies, Departments and Units in this Ministry
                        </div>

                        <section id="directorates" className = "multi" >

                            <h1>Agencies</h1>

                            <div className="mda__card__ui flex gap__20">

                                <div className="mda__card">

                                    <div className="iconHolder">

                                        <div className="card__photo">
                                            <img src = {units} />
                                        </div>

                                    </div>

                                    <div className="card__content">
                                        <p> Lagos State Science Research and Innovation Council (LASRIC) </p>
                                        <span> <Cellar/> Agency</span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="iconHolder">

                                        <div className="card__photo">
                                            <img src = {units} />
                                        </div>

                                    </div>

                                    <div className="card__content">
                                        <p> Cyber Security Advisory Council </p>
                                        <span> <Cellar/> Agency </span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="iconHolder">

                                        <div className="card__photo">
                                            <img src = {units} />
                                        </div>

                                    </div>

                                    <div className="card__content">
                                        <p> Lagos State Residents Registration Agency (LASRRA) </p>
                                        <span> <Cellar/> Agency</span>
                                    </div>

                                </div>

                            </div>

                        </section>

                        <section id="directorates" className = "multi" >

                            <h1>Departments</h1>

                            <div className="mda__card__ui flex gap__20">

                                <div className="mda__card">

                                    <div className="iconHolder">

                                        <div className="card__photo">
                                            <img src = {dept} />
                                        </div>

                                    </div>

                                    <div className="card__content">
                                        <p>Administration and Human Resources [A & HR]</p>
                                        <span> <Cellar/> Departments</span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="iconHolder">

                                        <div className="card__photo">
                                            <img src = {dept} />
                                        </div>

                                    </div>

                                    <div className="card__content">
                                    <p>Finance and {<br></br>} Accounts [F & A]</p>
                                    <span> <Cellar/> Directorates</span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="iconHolder">

                                        <div className="card__photo">
                                            <img src = {dept} />
                                        </div>

                                    </div>

                                    <div className="card__content">
                                    <p> Information Communication Technology[ICT]</p>
                                    <span> <Cellar/> Directorates</span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="iconHolder">

                                        <div className="card__photo">
                                            <img src = {dept} />
                                        </div>

                                    </div>

                                    <div className="card__content">
                                    <p>Science, Policy, Programmes and Promotion[SPPP]</p>
                                    <span> <Cellar/> Directorates</span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="iconHolder">

                                        <div className="card__photo">
                                            <img src = {dept} />
                                        </div>

                                    </div>

                                    <div className="card__content">
                                    <p>Computer Services [CS]</p>
                                    <span> <Cellar/> Directorates</span>
                                    </div>

                                </div>

                            </div>

                        </section>

                        <section id="units" className = "multi" >

                            <h1>Units</h1>

                            <div className="mda__card__ui flex gap__20">

                                <div className="mda__card">

                                    <div className="iconHolder">

                                        <div className="card__photo">
                                            <img src = {agency} />
                                        </div>

                                    </div>

                                    <div className="card__content">
                                    <p>Public Affairs</p>
                                    <span> <City/> Units</span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="iconHolder">

                                        <div className="card__photo">
                                            <img src = {agency} />
                                        </div>

                                    </div>

                                    <div className="card__content">
                                    <p>The Internal Audit</p>
                                    <span> <City/> Units</span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="iconHolder">

                                        <div className="card__photo">
                                            <img src = {agency} />
                                        </div>

                                    </div>

                                    <div className="card__content">
                                    <p>Planning</p>
                                    <span> <City/> Units</span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="iconHolder">

                                        <div className="card__photo">
                                            <img src = {agency} />
                                        </div>

                                    </div>

                                    <div className="card__content">
                                    <p>Procurement</p>
                                    <span> <City/> Units</span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="iconHolder">

                                        <div className="card__photo">
                                            <img src = {agency} />
                                        </div>

                                    </div>

                                    <div className="card__content">
                                    <p>Engineering</p>
                                    <span> <City/> Units</span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="iconHolder">

                                        <div className="card__photo">
                                            <img src = {agency} />
                                        </div>

                                    </div>

                                    <div className="card__content">
                                    <p>Legal</p>
                                    <span> <City/> Units</span>
                                    </div>

                                </div>

                            </div>

                        </section>
                        
                    </div>

                    <div id="responsibility">

                        <div className="titlePin">
                            Roles and Responsibilities: Understanding Core Functions, Duties, and Key Roles
                        </div>

                        <div className="resp__body">

                            <div className="summary">The Statutory responsibilities of the Ministry of Innovation, science and Technology include the following major services amongst others: </div>

                            <div className="body__list">

                                <ol>
                                    <li> 01. Initiate, formulate, execute, monitor and evaluate policies relating to Science & Information Communication Technology (ICT).</li>
                                    <li>02. Automation and reengineering of government business processes & harmonisation of all existing ICT assets into a world class infrastructure.</li>
                                    <li>03. Provision and maintenance of ICT services across Ministries, Departments &Agencies (MDAs).</li>
                                    <li>04. Development of Science, Technology, Engineering & Mathematics (STEM) education as well as setting up ICT Centre for state schools.</li>
                                    <li>05. STEM & ICT capacity building across all MDAs.</li>
                                    <li>06. Enlarging the pool of scientific manpower, attracting young people to careers in science and retaining same.</li>
                                    <li>07. Establishing globally competitive research facilities for the promotion of innovation, research & development in Science & ICT..</li>
                                </ol>

                            </div>

                        </div>

                    </div>

                    <div id="people">

                        <div className="titlePin">
                            Meet the Team: Passionate People Driving Success and Innovation Forward
                        </div>

                        <div className="gallery__mda gallx">

                            <section>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src={tunbosun} alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span>Honourable Commissioner</span>
                                        <p>Mr. Tunbosun Alake </p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src={ibilola} alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span> PERMANENT SECRETARY
                                        </span>
                                        <p>Engr (Mrs) Ibilola Olufolake Kasunmu</p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src={adewoju} alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span> Director, Finance& Accounts</span>
                                        <p>Adewoju Olusola Olayinka (Mrs)</p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src={faderera} alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span>HEAD, SERVICE DELIVERY </span>
                                        <p>Mrs. Faderera Ajibola Lekan-Rotimi </p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src={gbemi} alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span>HEAD,STRATEGY & GOVERNANCE DEPARTMENT</span>
                                        <p>Mrs. Gbemisola Kayode Bolarinwa</p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src={tunji} alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span>Director Science Policy, Programme and Promotion</span>
                                        <p>Adetunji Oluwaseyi Adebayo</p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src={yinka} alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span> Director Infrastructure </span>
                                        <p>Mr. Sorungbe Tiwalade Adeyinka</p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src={idris} alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span>HEAD, PROCUREMENT UNIT</span>
                                        <p>Mrs. Idris Amina Ikeoluwa</p>
                                    </div>

                                </a>

                            </section>

                        </div>

                    </div>

                </ScrollSpy>

            </Container>

        </div>

        <Footer/>

    </div>
  )
}
