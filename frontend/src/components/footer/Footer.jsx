import React from 'react';
import {AiOutlineInstagram} from 'react-icons/ai';
import {BiLogoLinkedinSquare} from 'react-icons/bi' 
import {AiOutlineGlobal} from 'react-icons/ai';
import './footer.css'

const Footer = () => {
  return (
        <div className='links'>
            <article>
            <AiOutlineGlobal/>
            <a href="https://www.portfoliobox.net/?s=googleen&gclid=CjwKCAjw44mlBhAQEiwAqP3eViBX52lxnIWJUd91N8FDFrOrZyEhv8AdPGLU2Qu6eBgplzrL6ose8xoCedkQAvD_BwE">Portfolio</a>
            </article>  
            <article>
            <AiOutlineInstagram/>
            <a href="https://www.instagram.com/?__coig_restricted=1">Instagram</a>
            </article>  
            <article>
            <BiLogoLinkedinSquare/>
            <a href="https://www.linkedin.com">Linkedin</a>
            </article>  
        </div>
  )
}

export default Footer;