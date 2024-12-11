import React from 'react'
import './newsroom.scss'
import Button from '../button/Button'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'iconoir-react'

export default function Newsroom({type}) {

  return (

    <div className="newsroom" id = {type} >
        
        <div className="tag__title flex__combo__align__spacebtw">

            <div className="font__32 font__weight__600 blog margin__top__10"> Trending Topics </div>
            
            {
                type === 'main' ? null
                :
                <div className="controls flex gap__15"> 
                    <div className="controls__btn prev cursor__pointer"> <ArrowLeft/> </div> 
                    <div className="controls__btn next cursor__pointer"> <ArrowRight/> </div> 
                </div>
            }

        </div>

        {/* news items */}

        <div className="news flex" id = {type}>

            <a href='/newsroom/381639814' className="news__item">

                <div className="photo">
                    <img src="https://lagosministryofhealth.org/wp-content/uploads/2024/08/IMG-20240821-WA0017.jpg" alt="images" />
                </div>

                <div className="content__text font__16 font__weight__600">

                <p className="published">Published 4 Days ago</p>

                <p>Lagos State Resumes “Alaafia Eko” Medical Outreach Amidst Residents’ Jubilation</p>
                </div>

            </a>

            <a href='/newsroom/381639814' className="news__item">

                <div className="photo"><img src="https://lagosministryofhealth.org/wp-content/uploads/2024/08/IMG-20240820-WA0016.jpg" alt="images" /></div>
                <div className="content__text font__weight__600">
                    <p className="published">Published 4 Days ago</p>
                    <p>Global Fund Boosts Lagos Healthcare With Five State-Of-The-Art Micu Ambulances</p>
                </div>

            </a>

            <a href='/newsroom/381639814' className="news__item">

                <div className="photo"><img src="https://lagosministryofhealth.org/wp-content/uploads/2024/08/IMG-20240818-WA0014.jpg" alt="images" /></div>
                <div className="content__text font__weight__600">
                <p className="published">Published 4 Days ago</p>
                <p>Lagos Free Medical Outreach “Alaafia Eko” Returns</p>
                
                </div>

            </a>

            <a href='/newsroom/381639814' className="news__item">

                <div className="photo"><img src="https://lagosministryofhealth.org/wp-content/uploads/2024/08/IMG-20240815-WA0003.jpg" alt="images" /></div>
                <div className="content__text font__weight__600">
                <p className="published">Published 4 Days ago</p>
                <p>Lagos Ship Sets Sail, Promises Enhanced Patient Care And Efficiency.</p>
                </div>

            </a>

            <a href='/newsroom/381639814' className="news__item">

                <div className="photo"><img src="https://lagosministryofhealth.org/wp-content/uploads/2024/08/IMG-20240818-WA0014.jpg" alt="images" /></div>
                <div className="content__text font__weight__600">
                <p className="published">Published 4 Days ago</p>
                <p>Lagos Free Medical Outreach “Alaafia Eko” Returns</p>
                </div>

            </a>

        </div>

    </div>

  )

}
