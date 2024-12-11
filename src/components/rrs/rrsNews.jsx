import { ArrowSeparate, Facebook, FacebookTag, Instagram, Linkedin, Twitter, X } from 'iconoir-react'
import React, {useEffect} from 'react'
import Container from '../container/Container';

export default function RrsNews() {

    const date = new Date().toString()
    let str = date.split(" ").filter((e, index) => index < 4)
    const newDate = `${str[0]}, ${str[1]}. ${str[2]} ${str[3]}`;
   

    useEffect(() => {

    }, []);

  return (

    <div className="rrs">

      <Container>

        <div className="trend flex">

          <div className="date"> {newDate} </div>

          <div className="trend__news"> <span>Trending :</span> Lasg seeks action on cybersecurity as awareness month kicks off <ArrowSeparate/> </div>

          <div className="socials flex">

            <a href="#"><Instagram/></a>
            <a href="#"><Twitter/></a>
            <a href="#"><Linkedin/></a>
            <a href="#"><FacebookTag/></a>

          </div>

        </div>

      </Container>

    </div>

  )

}
