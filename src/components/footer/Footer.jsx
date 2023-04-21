import React from 'react'
import "./Style.scss"
import  logo  from "../../assets/logo.png"
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import ContentWrapper from '../contentWrapper/ContentWrapper'

const Footer = () => {
  return (
    <footer className="footer">
            <ContentWrapper>
              <div className="logo">
                <img src={logo} alt="" />
              </div>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <span className="icon" href='https://www.facebook.com/profile.php?id=100015116558924'>
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
                <div className="company">© 1996-2023, Movies.com, Inc. or its affiliates</div>
            </ContentWrapper>
        </footer>
  )
}

export default Footer
