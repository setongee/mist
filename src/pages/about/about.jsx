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
                                    <li>Initiate, formulate, execute, monitor and evaluate policies relating to Science & Information Communication Technology (ICT).</li>
                                    <li>Automation and reengineering of government business processes & harmonisation of all existing ICT assets into a world class infrastructure.</li>
                                    <li>Provision and maintenance of ICT services across Ministries, Departments &Agencies (MDAs).</li>
                                    <li>Development of Science, Technology, Engineering & Mathematics (STEM) education as well as setting up ICT Centre for state schools.</li>
                                    <li>STEM & ICT capacity building across all MDAs.</li>
                                    <li>Enlarging the pool of scientific manpower, attracting young people to careers in science and retaining same.</li>
                                    <li>Establishing globally competitive research facilities for the promotion of innovation, research & development in Science & ICT..</li>
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
                                        <img src="https://mist.lagosstate.gov.ng/wp-content/uploads/sites/54/2023/09/WhatsApp-Image-2024-01-10-at-14.41.27-780x470.jpeg" alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span>Honourable Commissioner</span>
                                        <p>Mr. Tunbosun Alake </p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src="https://mist.lagosstate.gov.ng/wp-content/uploads/sites/54/2019/08/Engr.Ibilola-Kasunmu-417x470.png" alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span> PERMANENT SECRETARY
                                        </span>
                                        <p>Engr (Mrs) Ibilola Olufolake Kasunmu</p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src="https://mist.lagosstate.gov.ng/wp-content/uploads/sites/54/2022/08/WhatsApp-Image-2022-08-22-at-12.26.32-PM.jpeg" alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span> Director, Finance& Accounts</span>
                                        <p>ADEWOJU OLUSOLA OLAYINKA (MRS)</p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src="https://mist.lagosstate.gov.ng/wp-content/uploads/sites/54/2017/03/mrs-lekan-rotimi.png" alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span>HEAD, SERVICE DELIVERY </span>
                                        <p>Mrs. Faderera Ajibola LEKAN-ROTIMI </p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src="https://mist.lagosstate.gov.ng/wp-content/uploads/sites/54/2017/03/mrs-Bolarinwa.png" alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span>HEAD,STRATEGY & GOVERNANCE DEPARTMENT</span>
                                        <p>MRS. GBEMISOLA KAYODE BOLARINWA</p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src="https://mist.lagosstate.gov.ng/wp-content/uploads/sites/54/2017/03/WhatsApp-Image-2024-01-10-at-14.42.32.jpeg" alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span>Director Science Policy, Programme and Promotion</span>
                                        <p>Adetunji Oluwaseyi Adebayo</p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src="https://mist.lagosstate.gov.ng/wp-content/uploads/sites/54/2016/02/SORUNGBE-TIWALADE-ADEYINKA.jpg" alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span> Director Infrastructure </span>
                                        <p>MR. SORUNGBE TIWALADE ADEYINKA</p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src="https://mist.lagosstate.gov.ng/wp-content/uploads/sites/54/2022/04/197493BE-39AE-49A6-81D1-2FC7F078989D-767x1024.jpeg" alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span>HEAD ,PROCUREMENT UNIT</span>
                                        <p>MRS. IDRIS AMINA IKEOLUWA</p>
                                    </div>

                                </a>

                            </section>

                        </div>

                    </div>

                </ScrollSpy>

            </Container>

        </div>

    </div>
  )
}
